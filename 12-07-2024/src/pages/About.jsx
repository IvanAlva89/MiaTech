import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/")
    }

    return (
        <>
            <div>About page</div>
            <button onClick={handleNavigate}>Go Home</button>
        </>
    )
}

export default About;