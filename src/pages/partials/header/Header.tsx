import './Header.css';

const Header = () => { // Make this reusable component
    return (
        <header className='header'>
            <div className='header-icons-container'>
                <img className='header-burger' src="/assets/images/oh-my-donut-images/ICONS/menu-burger-icon.png" alt="menu burger icon" />
                <img className='header-logo' src="/assets/images/oh-my-donut-images/GRAPHISM/oh-my-donut-long-with-halo.png" alt="oh my donuts logo" />
                <img className='header-basket' src="/assets/images/oh-my-donut-images/ICONS/basket.png" alt="basket icon" />
            </div>
            <div className='header-image'></div>
            {/* <img className='header-image' src="/assets/images/oh-my-donut-images/CATEGORY/category-douceurs.jpg" alt="header background" /> */}
        </header>
    )
}

export default Header;