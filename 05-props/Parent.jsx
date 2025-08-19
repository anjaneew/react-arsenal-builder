import ChildA from './ChildA.jsx';
import ChildB from './ChildB.jsx';

const Parent = () => {
  return (
    <>
    <ChildA
        img = "https://picsum.photos/200"
        name = "Alice Johnson"
        age = {25}
        isMarried = {false}
        hobbies = {["reading", "cycling", "cooking"]}
    />
    <ChildB
        img = "https://picsum.photos/210"
        name = "David Smith"
        age = {34}
        isMarried = {false}
        hobbies = {["gaming", "traveling","photography"]}
    /></>
  );
}

export default Parent;