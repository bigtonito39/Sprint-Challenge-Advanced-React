/*import { useState } from "react";

export function userInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const customSetter = newValue => {
    setValue(newValue);
  };
  return [value, customSetter];
}


//Using local storage
export function useLocalStorage(key, initialValue) {
    const [value, setValue] = userInput(() => {
    
      return window.localStorage.getItem(key) || initialValue;
    });
   
    const customSetter = newValue => {
      setValue(newValue);
      window.localStorage.setItem(key, newValue);
    };
    return [value, customSetter];
}
*/