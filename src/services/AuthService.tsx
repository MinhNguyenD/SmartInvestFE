import { UserAuth, UserProfile } from "@/models/User";
import axios from "axios";

const api = "http://localhost:5035/api/auth/";

export const loginUser = async (email: string, password: string) => {
  try {
    const res = await axios.post<UserAuth>(api + "login", {
      email: email,
      password: password,
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Login failed");
    }
    throw new Error("An unknown error occurred");
  }
};

export const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const res = await axios.post<UserAuth>(api + "register", {
      username: username,
      email: email,
      password: password,
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Register failed");
    }
    throw new Error("An unknown error occurred");
  }
};
