import { API_URL } from "../config/api";
import Member from "../models/Member";

export const getMembers = async () => {
  try {
    const response = await fetch(`${API_URL}/api/core/members`);
    const data = await response.json();
    return Member.fromJsonArray(data);
  } catch (error) {
    console.error(error);
  }
};
