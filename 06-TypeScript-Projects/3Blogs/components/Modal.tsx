import type React from "react";

const Modal: React.FC<{ children: React.ReactNode; onClose: () => void}> 
= ( {children, onClose } ) => {
   return (
    <div>
      <div>
        {children}
        <button onClick={onClose}/>
      </div>
    </div>
  );
};

export default Modal;