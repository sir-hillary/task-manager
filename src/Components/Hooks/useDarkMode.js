

import React, { useEffect, useState } from 'react'

const useDarkMode = () => {

    const [isDark,setIsDark] = useState(()=>{
        const saved = localStorage.getItem("theme");
        return saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
    })

    useEffect(()=>{
        const root = window.document.documentElement;

        if(isDark){
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }else{
            root.classList.remove("dark");
            localStorage.setItem("theme", "light")
        }
    },[isDark]);

    const toggleDarkMode = ()=> setIsDark(prev=>!prev);
  return [isDark, toggleDarkMode];
};

export default useDarkMode
