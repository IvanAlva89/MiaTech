import React, { useRef } from 'react';

const UncontrolledInput = () => {
    const inputRef = useRef();
    // console.log(inputRef);

    const handleClick = () => {
        if(!inputRef.current.value) return;

        alert(inputRef.current.value);
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <input 
                type="submit" 
                value="Cliccami"
                onClick={handleClick}
            />
        </div>
    )
}

export default UncontrolledInput;