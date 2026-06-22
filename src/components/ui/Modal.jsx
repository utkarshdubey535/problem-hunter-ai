function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div>
      <div>
        <h2>{title}</h2>

        {children}

        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;