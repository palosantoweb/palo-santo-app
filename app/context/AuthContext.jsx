'use client'
import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);


  const updateSession = (newSession) => {
    setSession(newSession);
  };

  return (
    <AuthContext.Provider value={{ session, updateSession,setSession }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
