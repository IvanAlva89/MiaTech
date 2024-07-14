import React, { useState } from 'react';

const TextInput = () => {
    const [text, setText] = useState("");

    const handleInput = (event) => {
        console.log(event.target.value);
        setText(event.target.value);
    }

    return (
        <input 
            type="text"
            value={text}
            onInput={handleInput}
        />
    )
}

export default TextInput;