import { getToken } from "../utils/token";

export const useAuth = () => {
  const isLogged = getToken() ? true : false;

  return {
    isLogged,
  };
};
