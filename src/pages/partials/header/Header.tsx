import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='header-image'></div>
            {/* <img className='header-image' src="/assets/images/oh-my-donut-images/CATEGORY/category-douceurs.jpg" alt="header background" /> */}
            <img className='header-basket' src="/assets/images/oh-my-donut-images/ICONS/basket.png" alt="header background" />
        </header>
    )
}

export default Header;