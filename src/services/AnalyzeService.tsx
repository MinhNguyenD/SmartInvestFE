import { Analysis } from "@/models/Analysis";
import axios from "axios";

const api =
  "http://ab9a681cc71ce412499f568f6949544b-1334137487.us-east-1.elb.amazonaws.com/api/analyses";

export const getAllAnalyses = async () => {
  try {
    const res = await axios.get<Analysis[]>(api);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getAnalysisById = async (id: number) => {
  try {
    const res = await axios.get<Analysis>(api + `/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const createAnalysis = async (symbol: string) => {
  try {
    const res = await axios.post(api + `?symbol=${symbol}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const sendEmailAnalysis = async (id: number) => {
  try {
    const res = await axios.post(api + `/${id}/email`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteAnalysis = async (id: number) => {
  try {
    const res = await axios.delete(api + `/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
