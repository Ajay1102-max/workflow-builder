import axios from "axios";

const API_URL = "http://localhost:5000/api/workflows";

export const saveWorkflow = async (payload: {
  name: string;
  nodes: any[];
  edges: any[];
}) => {
  const res = await axios.post(API_URL, payload);
  return res.data;
};
