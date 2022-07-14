import { useEffect, useState } from 'react';

export default function useProvideAuth() {
  const [token, setToken] = useState(null);
  // const [isLogin, setIsLogin] = useState(!!JSON.parse(localStorage.getItem('isLogin')));
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const login = token => {
    localStorage.setItem('isLogin', true);
    setToken(token);
    setIsLogin(true);
  };

  const logout = () => {
    localStorage.removeItem('isLogin');
    setToken(null);
    setIsLogin(false);
  };

  useEffect(() => {
    setIsLogin(!!JSON.parse(localStorage.getItem('isLogin')));
    // Sync all tabs on login or logout
    window.addEventListener('storage', e => {
      if (e.key === 'isLogin') {
        setIsLogin(e.newValue);
      }
    });
  });

  return { token, login, logout, isLogin, isLoading };
}