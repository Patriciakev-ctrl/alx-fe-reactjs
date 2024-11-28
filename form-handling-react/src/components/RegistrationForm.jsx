// src/components/RegistrationForm.js

import React, { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setErrors] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Basic validation
        if (!username ) {
            setErrors('All fields are required!');
            return;
        }
        if (!email) {
            setErrors('All fields are required!');
            return;
        }
        if (!password) {
            setErrors('All fields are required!');
            return;
        }


        // Reset error message
        setErrors('');

        // Handle form submission logic here (e.g., API call)
        console.log('Form submitted:', { username, email, password });
        
        // Optionally, clear the form
        setUsername('');
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <h2>Register</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username:
                        <input 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </label>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;