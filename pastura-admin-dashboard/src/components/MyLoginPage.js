// in src/MyLoginPage.js
import * as React from 'react';
import { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';

const MyLoginPage = ({ theme }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();

    const handleSubmit = e => {
        e.preventDefault();
        // will call authProvider.login({ email, password })
        //localStorage.setItem('username', username);
        login({ username, password }).catch(() =>
            notify('Invalid email or password')
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="username"
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input
                name="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button>login</button>
        </form>
    );
};

export default MyLoginPage;