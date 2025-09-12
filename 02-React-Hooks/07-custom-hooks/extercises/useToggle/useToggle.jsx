import { useState } from 'react';

//sets default false if nothing is passed in.
const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue((v) => !v);
  return [value, toggle];
};

export default useToggle;

/**returns an array :
 * 1 boolean value 
 * 2 toggle function
 * 
 * This returns an array so you can destructure it like:
 * const [isOpen, toggleOpen] = ToggleComponent();
 */

