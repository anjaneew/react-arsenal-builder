import { createPortal } from 'react-dom';
import './MyStyles.css';

const PopupContent = ({ copied }) => {
  return createPortal (
    <section>
        <h1>Portal Demo</h1>
        {copied && (
            <div className="popup">
                <h1>Copied to Clipboard</h1>
            </div>
        )}
    </section>,
    document.getElementById('portal-popup')
  );
};

export default PopupContent;