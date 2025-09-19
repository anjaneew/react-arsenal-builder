import { useState } from 'react';
import './styles.css';

const Accordion = ({ title, content, index}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => setIsActive(!isActive);

  return (
    <section className="accordion-card" key={index}>
      <div className="header" onClick={handleClick}>
        <div>{title}</div>
        <p className="icon">{isActive ? "-" : "+"}</p>
        <div className="content">
          {isActive && <p className="card-info">{content}</p>}
        </div>
      </div>
    </section>
  );
};

export default Accordion;