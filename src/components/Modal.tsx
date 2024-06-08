interface ModalProps {
    children: React.ReactNode;
    title: string;
    closeModal: () => void
}

const Modal = ({children, title, closeModal}: ModalProps) => {

    return (
        <>
            <div className="overlay" onClick={closeModal} />
            <div className="modal">
                <div className="modal__title">{title}</div>
                {children}
            </div>
        </>
    );
}
 
export default Modal;