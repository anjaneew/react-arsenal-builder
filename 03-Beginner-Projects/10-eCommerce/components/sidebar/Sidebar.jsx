import Category from './category/Category.jsx';
import Price from './price/Price.jsx';
import Colors from './color/Colors.jsx';
import './Sidebar.css'

const Sidebar = ({ handleChange }) => {
  return (
    <>
    <section className="sidebar">
      <div className="log-container">
        <h1>🛒</h1>
      </div>
      <Category handleChange={handleChange} />
      <Price handleChange={handleChange} />
      <Colors handleChange={handleChange} />
    </section>
    </>
  );
};

export default Sidebar;