// src/hooks/useAuth.ts
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for authentication token
    const token = localStorage.getItem('authToken');
    
    if (token) {
      setIsAuthenticated(true);
      setIsLoading(false);
    } else {
      // Redirect to login if not authenticated
      navigate('/login');
      setIsLoading(false);
    }
  }, [navigate]);

  return { isAuthenticated, isLoading };
};

export default useAuth;