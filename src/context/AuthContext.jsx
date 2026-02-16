import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [sessionExpiry, setSessionExpiry] = useState(null);
  const navigate = useNavigate();

  // Initialize from localStorage
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
    const expiry = localStorage.getItem('sessionExpiry');
    
    if (loggedInUser && expiry && Date.now() < parseInt(expiry)) {
      setUser(loggedInUser);
      setSessionExpiry(parseInt(expiry));
    } else {
      logout();
    }
  }, []);

  // Session check interval
  useEffect(() => {
    if (!sessionExpiry) return;
    const interval = setInterval(() => {
      if (Date.now() > sessionExpiry) {
        alert("Session expired. Please log in again.");
        logout();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sessionExpiry]);

  const register = (userData) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.email === userData.email)) return "Email already exists";
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    return null;
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = users.find(u => u.email === email && u.password === password);
    if (validUser) {
      const expiry = Date.now() + 5 * 60 * 1000; // 5 minutes
      setUser(validUser);
      setSessionExpiry(expiry);
      localStorage.setItem('currentUser', JSON.stringify(validUser));
      localStorage.setItem('sessionExpiry', expiry.toString());
      navigate('/');
      return null;
    }
    return "Invalid credentials";
  };

  const logout = () => {
    setUser(null);
    setSessionExpiry(null);
    localStorage.removeItem('currentUser');
    localStorage.removeItem('sessionExpiry');
    navigate('/login');
  };

  const updateProfile = (updatedData) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map(u => u.email === user.email ? { ...u, ...updatedData } : u);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    const newUser = { ...user, ...updatedData };
    setUser(newUser);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
  };

  return (
    <AuthContext.Provider value={{ user, sessionExpiry, register, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);