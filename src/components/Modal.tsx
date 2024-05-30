interface ModalProps {
    children: React.ReactNode;
    title: string;
}

const Modal = ({children, title}: ModalProps) => {

    return (
        <div className="overlay">
            <div className="modal">
                <div className="modal__title">{title}</div>
                {children}
            </div>
        </div>
    );
}
 
export default Modal;