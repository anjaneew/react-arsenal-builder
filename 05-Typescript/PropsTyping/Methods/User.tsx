
const User = (props: { name: string; age: number; isStudent: boolean}) => {
  return (
    <div>
        <h1>1. Passing Types</h1>
        <h2>Name: {props.name}</h2>
        <h2>Age: {props.age}</h2>
        <h2>Enrolled: {props.isStudent ? "yes" : "no"}</h2>
    </div>
  );
};

export default User;