
type UserDetails = {
  name: string; 
  age: number; 
  isStudent: boolean;
}

// interface UserDetails {
//   name: string; 
//   age: number; 
//   isStudent: boolean;
// }

const User3 = ({ name, age, isStudent}: UserDetails) => {
  return (
    <div>
        <h1>3. Creating Custom Types (type alias & Interfaces)</h1>
        <h2>Name: {name}</h2>
        <h2>Age: {age}</h2>
        <h2>Enrolled: {isStudent ? "yes" : "no"}</h2>
    </div>
  );
};

export default User3;

//You can use either the type alias or an interface alternatively