import styles  from './Modal.module.css';

export interface IModalProps {
    toggleModal: boolean,
    setToggleModal: (toggleModal: boolean) => void,
}

const Modal = ({setToggleModal, toggleModal}: IModalProps) => {

    return (
        <>
        <div className={styles.darkBG} onClick={() => setToggleModal(false)} />
        <section className={styles.centered}>
            <div className={styles.modalOh}>
                <h2 className={styles.modalTitle}>ES-TU CERTAIN-E DE VOULOIR TOUT RECOMMENCER À ZÉRO ?</h2>
                <div className={styles.buttons}>
                    <button className={styles.modalButton} onClick={() => setToggleModal(false)}>OUI</button>
                    <button className={styles.modalButton} onClick={() => setToggleModal(false)}>NON</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default Modal;