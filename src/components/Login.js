import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = ({ onSwitchToRegister }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        if (login(username, password)) {
            // Успешный вход, App.js должен перенаправить
            console.log('Вход выполнен успешно');
        } else {
            setError('Неверное имя пользователя или пароль.');
        }
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
            <form
                onSubmit={handleSubmit}
                className='bg-white p-8 rounded-lg shadow-xl w-full max-w-sm'
            >
                <h2 className='text-3xl font-bold text-center text-gray-800 mb-6'>
                    Вход
                </h2>
                {error && (
                    <p className='text-red-500 text-center mb-4'>{error}</p>
                )}
                <div className='mb-4'>
                    <label
                        className='block text-gray-700 text-sm font-bold mb-2'
                        htmlFor='username'
                    >
                        Имя пользователя:
                    </label>
                    <input
                        type='text'
                        id='username'
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className='mb-6'>
                    <label
                        className='block text-gray-700 text-sm font-bold mb-2'
                        htmlFor='password'
                    >
                        Пароль:
                    </label>
                    <input
                        type='password'
                        id='password'
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className='flex items-center justify-between'>
                    <button
                        type='submit'
                        className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300'
                    >
                        Войти
                    </button>
                    <button
                        type='button'
                        onClick={onSwitchToRegister}
                        className='inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800'
                    >
                        Нет аккаунта? Зарегистрируйтесь
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
