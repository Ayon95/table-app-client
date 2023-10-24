import React, { useContext, useState } from 'react';
import config from '../utils/config';

const AuthContext = React.createContext();

function getUserFromSessionStorage() {
  const user = JSON.parse(sessionStorage.getItem(config.BROWSER_STORAGE_USER_KEY));
  return user ?? null;
}

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(getUserFromSessionStorage);
  const value = { user, setUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useUser() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('AuthContext was used outside of a component wrapped in AuthContextProvider');
  }

  return context;
}
