
// LogInForm.js
import React, { useState } from 'react';

const LogInForm = ({ toggleForm }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear error message if user starts typing
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Here you can implement form submission logic, like sending data to backend
            console.log('Submitted:', formData);
        }
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
            valid = false;
        }

        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
            <button type="submit">Log In</button>
            <p>Don't have an account? <span onClick={toggleForm}>Sign up</span></p>
        </form>
    );
};

export default LogInForm;
