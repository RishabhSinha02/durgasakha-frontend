import { API_URL } from "../config/api";

export const getTrek = async (id) => {
  const response = await fetch(`${API_URL}/api/trek/${id}`);
  return response.json();
};

export const getTreks = async () => {
  const response = await fetch(`${API_URL}/api/trek/all`);
  return response.json();
};
