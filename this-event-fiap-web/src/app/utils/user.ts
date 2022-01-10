import decode from "jwt-decode";
import { IMe } from "../interfaces/me";
import { getAuthenticationToken } from "./tokens";

export const getUserMe = (): IMe => {
  try {
    const token = getAuthenticationToken();
    const me = decode(token);
    return me as IMe;
  } catch (error) {
    return {
      id: null,
      name: null,
      email: null
    };
  }
}; 