import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => setCounter(counter + 1);
    const handleReset = () => setCounter(0);
    const handleDecrement = () => setCounter(value => value - 1);

    return (
        <>
            <div>Count: {counter}</div>
            <button onClick={handleIncrement}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrement}>-1</button>
        </>
    )
}

export default Counter