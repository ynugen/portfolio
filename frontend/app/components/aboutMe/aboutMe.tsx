import './styles.css';
import Image from 'next/image';

interface AboutMeProps {
    children: React.ReactNode;
}


const AboutMe: React.FC<AboutMeProps> = ({ children }) => {
    return (
        <div className='outer-container'>
            <div className='inner-container'>
            
                <Image src='/lovely.png' alt='Purple haired girl' width={260} height={260}/>

                <div className='text-container'>
                    {children}
                </div>
            </div>
        </div>

    );
};

export default AboutMe;