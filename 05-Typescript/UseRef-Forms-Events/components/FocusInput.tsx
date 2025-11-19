import { useRef } from "react";

const FocusInput = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        inputRef.current?.focus();//note
    }

    /**note : inputRef.current?.focus()
     * inputRef.current - gets the actual DOM input element
     * ?. - optional chaining (only calls focus() 
     * if current is not null)
     * .focus() - a native DOM method that puts the cursor 
     * in the input field */

  return (
    <div>
        <h3>FocusInput</h3>
        <input
            type="text"
            ref={inputRef}
            placeholder="Click the button to focus"
        />
        <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default FocusInput;