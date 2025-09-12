import { useState } from 'react';

// (initialValue = "") 
// value passed to make sure its not undefined
const useInput = (initialValue = "") => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return {
        value, 
        onChange: handleChange,
    };
};

export default useInput;