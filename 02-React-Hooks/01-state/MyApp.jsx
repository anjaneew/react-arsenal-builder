//-----------------UseState Hook---------------------
import './MyStyles.css';
import BasicCounter from './BasicCounter.jsx';
import UpdateArrays from './UpdateArrays.jsx';
import Books from './Books.jsx';
import Parent from './sharing/Parent.jsx';
import DataBank from './DataBank.jsx';

const MyApp = () => {

    return(
        <>
        <h1>useStateHook</h1>
        <div className="container">
            <BasicCounter />
            <UpdateArrays />
            <Books />
            <Parent />
            <DataBank />
        </div>
        </>

    );
}

export default MyApp;