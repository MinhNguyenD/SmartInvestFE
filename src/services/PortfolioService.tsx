import { Stock } from "@/models/Stock";
import axios from "axios";

const api = "http://localhost:5177/api/portfolio";

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
    const res = await axios.post<Stock[]>(api + `?symbol=${symbol}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteStock = async (symbol: string) => {
  try {
    const res = await axios.delete<Stock[]>(api + `?symbol=${symbol}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
