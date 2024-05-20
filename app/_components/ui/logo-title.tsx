import Image from 'next/image';

interface IProps {
    logo: string;
    alt: string,
    title: string
}

const LogoWithTitle = ({ logo, alt, title }: IProps) => {
    return (
        <div className='flex gap-2'>
            <Image src={logo} alt={alt} />
            <span>{title}</span>
        </div>
    )
}

export default LogoWithTitle