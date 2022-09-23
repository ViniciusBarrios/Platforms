import React, { createContext } from "react";

import { SignInData } from "forms";

import { useAuth, DataType } from "@contexts/hooks/useAuth";

type AuthContextType = {
  data: DataType | null;
  isAuthenticated: boolean;
  signIn(data: SignInData): Promise<{ error?: string; message?: string }>;
  logOut(): Promise<void>;
};

const AuthContext = createContext({} as AuthContextType);

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const { data, isAuthenticated, signIn, logOut } = useAuth();

  return (
    <AuthContext.Provider value={{ data, isAuthenticated, signIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
