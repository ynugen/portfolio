import './styles.css'
import HeaderButton from './HeaderButton';

export default function Header() {
    return (
        <header>
            <div className='main-component'>
                
                <div className='outer-container'>

                    <div className='header-title'>Amy Nguyen</div>
                        
                    {/* Link Navigation */}
                    <div className='inner-container'>
                        <HeaderButton href=''>Home</HeaderButton>
                        <HeaderButton href=''>About</HeaderButton>
                        <HeaderButton href=''>Projects</HeaderButton>
                        <HeaderButton href=''>Contact</HeaderButton>
                    </div>
                    
                </div>
            </div>
        </header>
    )
}