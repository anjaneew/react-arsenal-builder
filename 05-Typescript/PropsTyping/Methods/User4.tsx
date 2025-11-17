import type { ReactNode } from "react";

type Story = {
  children: ReactNode;
};

const User4 = ({ children }: Story) => {
  return (
    <>
    <h1>4. Using Children</h1>
    <main>{children}</main>
    </>
    
  );
};

export default User4;

/**
 * children: ReactNode
 * 
 * This is the modern way:
 * children: ReactNode is just for when you want to pass 
 * nested JSX/content inside a component.
 * “content passed between tags.”
 * */