import { useEffect, useState } from 'react';
import { Auth } from '../entities/auth';

export default function useProvideAuth(): Auth {
  const [token, setToken] = useState(null);
  // const [isLogin, setIsLogin] = useState(!!JSON.parse(localStorage.getItem('isLogin')));
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const login = token => {
    setToken(token);
    setIsLogin(true);
  };

  const logout = () => {
    localStorage.removeItem('isLogin');
    setToken(null);
    setIsLogin(false);
  };

  return { token, login, logout, isLogin, isLoading };
}