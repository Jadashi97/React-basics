import React from 'react'

export default function ModeToggleBtn() {

    let darkModeOn = false;
    const darkMode = <h1>Dark Mode is On</h1>;
    const lightMode = <h1>Light Mode is On</h1>;

    function handleClick(){
        darkModeOn = !darkModeOn
    }
    
    return (
        <div>
            {darkmodeOn ? darkMode : lightMode }
        <button onClick={handleClick}>
            Click me!
        </button>
        </div>
    )
}
