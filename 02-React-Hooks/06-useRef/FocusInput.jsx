import { useRef } from 'react';

const FocusInput = () => {
    const inputRef = useRef(null);

    const focusInput = () => {
        if(inputRef.current){
            inputRef.current.focus();
        }
    };

  return (
    <div>
        <h4>FocusInput</h4>
        <input/>
        <input/>
        <input 
            type="text"
            ref={inputRef}
        />
        <input/>
        <input/>
        <input/>
        <button onClick={focusInput}>Click the button to focus</button>

    </div>

  );
};

export default FocusInput;