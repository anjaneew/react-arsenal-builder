import Accordion from './Accordion.jsx';
import { accordionData } from './util/contents.js';

const MyApp = () => {
  return (
    <div>
        <div className="accordion">
            {accordionData.map(({title, content}, index) => (
                <Accordion title={title} content={content} index={index}/>
            ))}
        </div>
    </div>
  );
};

export default MyApp;