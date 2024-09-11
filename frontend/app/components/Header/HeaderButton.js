import './styles.css';
import Link from 'next/link';

export default function HeaderButton({href, children}) {
    return (
        <div className='text-container bg-white'>
            <Link href={href} className='header-font'>
                {children}
            </Link>
        </div>
    );
};