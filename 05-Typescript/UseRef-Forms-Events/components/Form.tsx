"use client";

import { useState, useRef, type FormEvent } from 'react';

type formData = {
    name: string;
    email: string;
    password: string;
}

const Form = () => {

    const [submittedData, setSubmittedData] = useState<formData>({
        name: "",
        email: "",
        password: "",
    });

    const name = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        /***The ! is TypeScript's non-null assertion operator.
         * It tells TypeScript: "I know this might be null or 
         * undefined, but trust me, it won't be at this point 
         * in the code."*/

        const nameVal = name.current!.value;
        const emailVal = email.current!.value;
        const passwordVal = password.current!.value;

        setSubmittedData({
            name: nameVal,
            email: emailVal,
            password: passwordVal,
        });

        console.log(nameVal);
        console.log(emailVal);
        console.log(passwordVal);

        name.current!.value ="";
        email.current!.value ="";
        password.current!.value ="";
    };

  return (
    <form onSubmit={handleSubmit}>
        <h1>Using forms with useRef hook</h1>
        <input
            type="text"
            placeholder="Enter your name"
            ref={name}
        /><br/>
        <input
            type="email"
            placeholder="Enter your email"
            ref={email}
        /><br/>
        <input
            type="password"
            placeholder="Enter your password"
            ref={password}
        /><br/>
        <button type="submit">Submit</button>

        <section>
            <h2>Name:{submittedData.name}</h2>
            <h2>Email:{submittedData.email}</h2>
            <h2>Password:{submittedData.password}</h2>
        </section>
    </form>
  );
};

export default Form;