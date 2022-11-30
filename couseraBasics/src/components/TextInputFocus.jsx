import React, { useRef } from 'react'

// set to learn the useRef hook
export default function TextInputFocus() {
    const inputEl = useRef(null);

    const onButtonClick = ()=>{
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };

    return (
        <div>
            <input ref={inputEl} type="text"/>
            <button onClick={onButtonClick}>Focus the input</button>
        </div>
    );
}
