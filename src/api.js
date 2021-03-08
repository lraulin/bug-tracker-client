import axios from "axios";
const URL = "http://localhost:8080/v1";

export const register = async (email = "", password = "") => {
  try {
    const url = URL + "/auth/register";
    const response = await axios.post(url, { email, password });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const login = async (email = "", password = "") => {
  try {
    const url = URL + "/auth/login";
    const response = await axios.post(url, { email, password });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};
