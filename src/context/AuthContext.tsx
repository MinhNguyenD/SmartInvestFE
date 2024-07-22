import { UserProfile } from "@/models/User";
import { loginUser, registerUser } from "@/services/AuthService";
import axios from "axios";
import React from "react";
import { createContext, ReactNode, useEffect, useState } from "react";

interface UserContextType {
  user: UserProfile | null;
  token: string | null;
  register: (email: string, username: string, password: string) => void;
  login: (username: string, password: string) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<UserContextType>({} as UserContextType);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
    setIsReady(true);
  }, []);

  const isAuthenticated = () => {
    return !!user;
  };

  const register = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      const data = await registerUser(username, email, password);
      const user: UserProfile = {
        username: data.username,
        email: data.email,
      };
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      setToken(data.token);
    } catch (error) {
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const data = await loginUser(email, password);
      const user: UserProfile = {
        username: data.username,
        email: data.email,
      };
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      setToken(data.token);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ login, user, token, logout, isAuthenticated, register }}
    >
      {isReady ? children : null}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
