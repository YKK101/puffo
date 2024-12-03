const Modal = ({ children, isShow, onClose }: { children: React.ReactNode; isShow: boolean; onClose: () => void }) => {
    if (!isShow) return null;

    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="absolute left-0 top-0 w-full h-full modal-background flex items-center justify-center cursor-pointer" onClick={handleOutsideClick}>
            <div className="cursor-default">{children}</div>
        </div>
    );
};

export default Modal;
