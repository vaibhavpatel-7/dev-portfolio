import { useEffect, useState } from 'react';

import { Isection } from '@/app/_components/navbar';

const useUpdateUrlOnScroll = (sections: Isection[]) => {
    const [sectionVisibilities, setSectionVisibilities] = useState({}); // Visibility states
    const [currentTab, setCurrentTab] = useState("")

    useEffect(() => {
        const updateVisibilities = () => {
            const newVisibilities: any = {};
            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight + window.scrollY;
                    newVisibilities[section.id] = isInView;
                }
            });
            setSectionVisibilities(newVisibilities);
        };

        window.addEventListener('scroll', updateVisibilities); // Bind scroll handler

        return () => {
            window.removeEventListener('scroll', updateVisibilities)
        }; // Cleanup
    }, []);

    useEffect(() => {
        // Update URL based on visibility changes (Optional)
        const currentSection = Object.entries(sectionVisibilities).find(([id, visible]) => visible);
        if (currentSection && !window.location.hash.includes(currentSection[0])) {
            window.location.hash = currentSection[0]; // Update hash fragment
            setCurrentTab(currentSection[0])
        }
    }, [sectionVisibilities]);

    return currentTab;
}

export default useUpdateUrlOnScroll;
