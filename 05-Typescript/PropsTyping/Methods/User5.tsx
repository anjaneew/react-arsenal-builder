import { FC } from "react";

type UserDetails = {
  name: string;
  age: number;
  isStudent: boolean;
};

const User5: FC<UserDetails> = ({ name, age, isStudent}) => {
  return (
    <div>
      <h1>5. FC Function Component</h1>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{isStudent ? "yes" : "no"}</h2>
    </div>
  );
};

export default User5;

/**FC
 * 
 * FC stands for Function Component. It tells TypeScript that 
 * User5 is a React component. It also lets TypeScript check 
 * the props (UserDetails) you give the component, and 
 * automatically knows your component can have children if needed. 
 * It helps catch mistakes before running the code. */