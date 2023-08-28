import { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import './Header.css';
import { useMobileContext } from 'contexts/MobileContext';
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';
import { useCartContext } from 'contexts/CartContext';

const Header = () => { // Make this reusable component

    const { toggleMobileMenu, getToggle } = useMobileContext();
    const { products, getTotalProductQuantity } = useCartContext();
    const location = useLocation();
    const { id } = useParams();

    useEffect(() => {
        console.log(location)
    }, [location.pathname])

    
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
            {/* <img className='header' src="/assets/images/oh-my-donut-images/WAVES/header-wave svg.svg" alt="" /> */}
            <div className='header-icons-container'>
                <img onClick={() => getToggle()} className='header-burger' src="/assets/images/oh-my-donut-images/ICONS/menu-burger-icon.png" alt="menu burger icon" />
                <NavLink to={'/'}><img className='header-logo' src="/assets/images/oh-my-donut-images/GRAPHISM/oh-my-donut-long-with-halo.png" alt="oh my donuts logo" /></NavLink>
                <span className='CartCounter'>({getTotalProductQuantity()})<Link to={'/cart'}><img className='header-basket' src="/assets/images/oh-my-donut-images/ICONS/basket.png" alt="basket icon" /></Link></span>
            </div>
            {/* <div className='header-image'></div> */}
            {/* J'ai commenté ⬇️ cette ligne pour mieux voir mon taff ⬇️ ;-) */}
            {(location.pathname === '/') ||  (location.pathname === `/ProductDetails/${id}`)? <img className='header-image' src="/assets/images/oh-my-donut-images/CATEGORY/category-douceurs-hd.jpeg" alt="header background" /> : null}
        </header>
         { toggleMobileMenu  && (screenSize.width < 768 ) ? <Navbar/> : null} 
        </>
    );
}

export default Header;