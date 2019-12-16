import { useState } from "react";



//Creating local hook as well as saving data to localStorage
export function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
     
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    });
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
      };
    return [storedValue,setValue ];
  }
