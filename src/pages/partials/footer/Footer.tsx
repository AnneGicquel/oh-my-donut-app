import { useEffect, useState } from 'react';
import './Footer.css'
import Modal from 'components/common/modal/Modal';

const Footer = () => {

    const [toggleModal, setToggleModal] = useState(false);

    const handleToggle = () => {
        setToggleModal(() => !toggleModal)
    }

    useEffect(() => {
        if (toggleModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'initial';
        }
    }, [toggleModal]);

    return (
        <footer className='footer'>
            <div className='footer-container'>
                <img className='footer-logo' src="/assets/images/oh-my-donut-images/GRAPHISM/oh-logo-pink-with-halo.png" alt=" footer logo oh-my-donuts" />
                <img onClick={handleToggle} className="reset-cart" src="/assets/images/oh-my-donut-images/ICONS/white-refresh.png" alt="refresh white icon" />
                {toggleModal && <Modal setToggleModal={setToggleModal} toggleModal={toggleModal} />}
            </div>
        </footer>
    )
}

export default Footer;