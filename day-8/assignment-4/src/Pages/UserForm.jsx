import React, { useState, useRef } from 'react';

function UserForm() {
    const [name, setName] = useState('');
    const emailRef = useRef();

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    // Submit handler
    const handleSubmit = (event) => {
        event.preventDefault();
        // Accessing value of uncontrolled input using ref
        const email = emailRef.current.value;
        console.log('Name:', name);
        console.log('Email:', email);
    };

    // Validation check
    const isNameValid = name.length >= 3;

    return (
        <form onSubmit={handleSubmit} className="form-container">
            {/* Controlled input */}
            <div className="form-group">
                <label htmlFor="name" className="label">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                    className={`input ${!isNameValid ? 'invalid' : ''}`}
                    placeholder='name'
                />
                {/* //validation */}

                {!isNameValid && <span className="error-message">Name must be at least 3 characters long</span>}
            </div>

            {/* Uncontrolled input */}
            <div className="form-group">
                <label htmlFor="email" className="label">Email:</label>
                <input
                    type="text"
                    id="email"
                    ref={emailRef}
                    className="input"
                />
            </div>

            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
}

export default UserForm;
