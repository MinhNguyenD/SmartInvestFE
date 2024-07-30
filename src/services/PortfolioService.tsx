import { Stock } from "@/models/Stock";
import axios from "axios";

const api =
  "";

export const getPortfolio = async () => {
  try {
    const res = await axios.get<Stock[]>(api);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const saveStock = async (symbol: string) => {
  try {
    const res = await axios.post(api + `?symbol=${symbol}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const removeStock = async (symbol: string) => {
  try {
    const res = await axios.delete(api + `?symbol=${symbol}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
