import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => setCounter(counter + 1);
    const handleReset = () => setCounter(0);
    const handleDecrement = () => setCounter(value => value - 1);

    useEffect(() => {
        console.log("valore counter aggiornato")
    }, [counter])

    return (
        <>
            <h2>Count: {counter}</h2>
            <button onClick={handleIncrement}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrement}>-1</button>
        </>
    )
}

export default Counter