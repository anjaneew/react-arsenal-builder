import ReactDOM from 'react-dom';
import './MyStyles.css';

const PortalsLesson = () => {
  return ReactDOM.createPortal(
    <div className="container">Portal Root</div>,
    document.getElementById("portal-root")
  );
}

export default PortalsLesson;