import { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import './Header.css';
import { useMobileContext } from 'contexts/MobileContext';

const Header = () => { // Make this reusable component

    const { toggleMobileMenu, getToggle } = useMobileContext();
    
    // ALLOW US TO GET INNERwIDTH ET HEIGHT OF SCREEN
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    
    function getCurrentDimension(){
        return {
              width: window.innerWidth,
              height: window.innerHeight
        }
    }

    useEffect(() => {
        const updateDimension = () => {
          setScreenSize(getCurrentDimension());
        }
        window.addEventListener('resize', updateDimension);

        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
      }, [])


    return (
        <>
        <header className='header'>
            <div className='header-icons-container'>
                <img onClick={() => getToggle()} className='header-burger' src="/assets/images/oh-my-donut-images/ICONS/menu-burger-icon.png" alt="menu burger icon" />
                <img className='header-logo' src="/assets/images/oh-my-donut-images/GRAPHISM/oh-my-donut-long-with-halo.png" alt="oh my donuts logo" />
                <img className='header-basket' src="/assets/images/oh-my-donut-images/ICONS/basket.png" alt="basket icon" />
            </div>
            {/* <div className='header-image'></div> */}
            {/* <img className='header-image' src="/assets/images/oh-my-donut-images/CATEGORY/category-douceurs.jpg" alt="header background" /> */}
        </header>
         { toggleMobileMenu  && (screenSize.width < 768 ) ? <Navbar/> : null} 
        </>
    );
}

export default Header;