import './MyStyles.css';
import UniqueID from './UniqueID.jsx';

const MyApp = () => {
  return (
    <div className="container">
        <h2>MyApp</h2>
        <div className="container">
            <div className="flexItem">
                <UniqueID/>
            </div>
            
            <div className="flexItem">
                            <h4>useId()</h4>
            <p>What it does: Creates 2 forms with unique IDs so screen readers and accessibility tools can properly connect each label to its input.</p>
            <code>// First UniqueID creates: id="r1-email", htmlFor="r1-email" </code>
            <br/>
            <code>// Second UniqueID creates: id="r2-email", htmlFor="r2-email"</code>
            </div>
            <div className="flexItem">
                <UniqueID/>
            </div>
        </div>
    </div>
  );
};

export default MyApp;