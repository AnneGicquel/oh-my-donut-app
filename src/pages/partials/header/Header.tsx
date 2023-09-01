import { useEffect, useRef, useState } from 'react';
import Navbar from '../navbar/Navbar';
import './Header.css';
import { useMobileContext } from 'contexts/MobileContext';
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';
import { useCartContext } from 'contexts/CartContext';
import { useCategoryContext } from 'contexts/CategoryContext';

const Header = () => { // Make this reusable component

    const { toggleMobileMenu, getToggle } = useMobileContext();
    const { products, getTotalProductQuantity } = useCartContext();
    const { categoryImage } = useCategoryContext();
    const location = useLocation();
    const { id } = useParams();
    const myRef = useRef<HTMLUListElement | any>();

    useEffect(() => {
        console.log(location.pathname)
    }, [location.pathname])


    // ALLOW US TO GET INNERwIDTH ET HEIGHT OF SCREEN
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension() {
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

        return (() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, []);

    useEffect(() => {
        if(location.pathname != '/') {
            myRef.current.classList.add('header_less')
        } else {
            myRef.current.classList.remove('header_less')
        }
    })


    return (
        <>
            <header className='header' ref={myRef}>
                {/* bande qui s'ajoute en format mobile pour élargir le header */}
                <div className='largerHeader'></div>
                {/* <img className='header' src="/assets/images/oh-my-donut-images/WAVES/header-wave svg.svg" alt="" /> */}
                <div className='header-icons-container'>
                    <img onClick={() => getToggle()} className='header-burger' src="/assets/images/oh-my-donut-images/ICONS/menu-burger-icon.png" alt="menu burger icon" />
                    <NavLink to={'/'}><img className='header-logo' src="/assets/images/oh-my-donut-images/GRAPHISM/oh-my-donut-long-with-halo.png" alt="oh my donuts logo" /></NavLink>
                    {
                        location.pathname === '/command' ?
                            null
                            :
                            <span className='CartCounter'>({getTotalProductQuantity()})
                                <Link to={'/cart'}>
                                    <img className='header-basket' src="/assets/images/oh-my-donut-images/ICONS/basket.png" alt="basket icon" />
                                </Link>
                            </span>
                    }
                </div>
                {/* <div className='header-image'></div> */}
                {(location.pathname === '/') ?
                    <img className='header-image' src={categoryImage} alt="header background" />
                    : null}
            </header>
            {toggleMobileMenu && (screenSize.width < 768) ? <Navbar /> : null}
        </>
    );
}

export default Header;