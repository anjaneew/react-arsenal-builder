import ChildA from './ChildA.jsx';
import ChildB from './ChildB.jsx';

const Parent = () => {
    return(
        <>
        <ChildA>
            <h1>Children Props</h1>
            <p>Props are arguments passed into React components. Props are passed to components via HTML attributes.</p>
        </ChildA>
        <ChildA>
            <h1>Children Props - destructuring</h1>
            <p>Props are arguments passed into React components. Props are passed to components via HTML attributes.</p>
        </ChildA>
    </>
    );
}

export default Parent;