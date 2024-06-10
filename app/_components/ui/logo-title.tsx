import Image from 'next/image';

interface IProps {
    logo: string;
    alt: string,
    title: string,
    delay?:string
}

const LogoWithTitle = ({ logo, alt, title ,delay="300" }: IProps) => {
    return (
        <div className='flex gap-2' data-aos="fade-up" data-aos-delay={delay}>
            <Image src={logo} alt={alt} />
            <span>{title}</span>
        </div>
    )
}

export default LogoWithTitle