import { UserAuth } from "@/models/User";
import axios from "axios";

const api =
  "http://ac614ef40e05a469c8fe3498f24983ed-1317741986.us-east-1.elb.amazonaws.com/api/auth/";

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
