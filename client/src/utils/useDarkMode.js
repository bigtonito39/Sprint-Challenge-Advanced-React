import React, {useEffect} from "react"
import {useLocalStorage} from "./useLocalStorage"

export const useDarkMode = ()=>{
    const [dark, setDark] = useLocalStorage("dark", false)
//function that will apply dark-mode css styling if data coming from dark is true, else it will remove the dark-mode styling
    useEffect(() => {
        if (dark === true) {
            document.querySelector("body").classList.add("dark-mode")
        } 
        else {
            document.querySelector("body").classList.remove("dark-mode")
        }
    },[dark])
    return [dark, setDark]
    
} 