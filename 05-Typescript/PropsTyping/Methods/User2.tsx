
const User2 = ({ 
  name, 
  age, 
  isStudent
}: {
  name: string; 
  age: number; 
  isStudent: boolean;
}) => {
  return (
    <div>
        <h1>2. Destructuring Props Values</h1>
        <h2>Name: {name}</h2>
        <h2>Age: {age}</h2>
        <h2>Enrolled: {isStudent ? "yes" : "no"}</h2>
    </div>
  );
};

export default User2;