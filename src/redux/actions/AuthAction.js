import axios from "axios";
import { login_api } from "../../api";

export const login = () => async (dispatch) => {
  try {
    const res = axios.get(login_api);
    console.log(res.data);
  } catch (error) {
    alert("failed connexion");
  }
};
