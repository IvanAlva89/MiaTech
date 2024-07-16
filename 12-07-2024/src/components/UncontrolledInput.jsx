import React, { useRef } from 'react';

const UncontrolledInput = () => {
    const inputRef = useRef();
    // console.log(inputRef);

    return (
        <input type="text" ref={inputRef} />
    )
}

export default UncontrolledInput;