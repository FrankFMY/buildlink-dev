import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        // Моковая авторизация: просто устанавливаем пользователя, если данные верны
        if (username === 'test' && password === 'password') {
            setUser({ username });
            return true;
        }
        return false;
    };

    const register = (username, password) => {
        // Моковая регистрация: просто создаем пользователя (в реальном приложении это отправлялось бы на сервер)
        if (username && password) {
            setUser({ username });
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
