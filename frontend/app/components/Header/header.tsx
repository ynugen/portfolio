import './styles.css'
import HeaderButton from './HeaderButton';

export default function Header() {
    return (
        <header>
            <div className='main-component shadow sticky'>
                
                <div className='outer-container'>

                    <div className='header-title md:text-1xl'>Amy Nguyen</div>
                        
                    {/* Link Navigation */}
                    <div className='inner-container'>
                        <HeaderButton href='/'>Home</HeaderButton>
                        <HeaderButton href='/about'>About</HeaderButton>
                        <HeaderButton href='/projects'>Projects</HeaderButton>
                        <HeaderButton href='/blog'>Blog</HeaderButton>
                        <HeaderButton href='/contact'>Contact</HeaderButton>
                    </div>
                    
                </div>
            </div>
        </header>
    );
};