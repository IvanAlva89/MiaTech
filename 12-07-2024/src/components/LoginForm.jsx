import React, { useState } from 'react';

const LoginForm = () => {
    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    const handleInput = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        const {name, value} = event.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Username: ${form.username}, Password: ${form.password}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="username"
                value={form.username}
                placeholder="Username"
                onInput={handleInput}
            />
            <input 
                type="password"
                name="password"
                value={form.password}
                placeholder="Password"
                onInput={handleInput}
            />
            <input type="submit" value="Login" />
        </form>
    )
}

export default LoginForm;