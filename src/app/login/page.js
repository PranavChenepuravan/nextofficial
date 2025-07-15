"use client";

import React, { useState } from 'react';

export default function LoginPage() {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, pass }),
            });
            const data = await response.json();
            if (data.success) {
                alert('Login successful!');
            } else {
                setError(data.message || 'Invalid username or password');
            }
        } catch (err) {
            setError('Server error');
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: '50px auto', padding: 24, border: '1px solid #ddd', borderRadius: 8 }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 16 }}>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        style={{ width: '100%', padding: 8, marginTop: 4 }}
                    />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label>Pass:</label>
                    <input
                        type="password"
                        value={pass}
                        onChange={e => setPass(e.target.value)}
                        required
                        style={{ width: '100%', padding: 8, marginTop: 4 }}
                    />
                </div>
                {error && <div style={{ color: 'red', marginBottom: 16 }}>{error}</div>}
                <button type="submit" style={{ width: '100%', padding: 10 }}>Login</button>
            </form>
        </div>
    );
}
