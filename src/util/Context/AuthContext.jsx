import React, { createContext, useContext } from "react";
import useAuth from "../Hooks/useAuth";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const { user, token, signup, signin, signout } = useAuth();

  const value = { user, token, signup, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
