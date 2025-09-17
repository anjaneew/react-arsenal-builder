import {useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import './styles.css'
/**install
 * npm i react-icons
 */

const MyApp = () => {
       
    const [showInput, setShowInput] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("white");
    const handleClick = (e) => {
        setBackgroundColor("#1a1a1a");
        if(e.target.className === "container") {
            setShowInput(false);
            setBackgroundColor("#fff");
        }
    }

    const handleSearch = () => setShowInput(true);

  return (
        <div>
            <h2>Project 6: Hidden Search using react icons</h2>
            <section className="container" style={{backgroundColor}} onClick={handleClick}>
                {showInput ? (
                    <input type="text" placeholder="Search..."/>
                ) : (
                    <FaSearch onClick={handleSearch}/>
                )}
            </section>
        </div>
  );
};

export default MyApp;

/**whats happening: 
 * At first, you see a search icon.
 * If you click the search icon → 
 * setShowInput(true) (inside JSX, not handleClick) → 
 * input box appears.
 * 
 * While the input is showing, 
 * if you click anywhere inside section, background turns dark.
 * 
 * If you click specifically on the container background (outside input/icon), 
 * input disappears and background turns white again.
 *
 */
