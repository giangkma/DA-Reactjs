const key = "token";

export const setToken = (token: string) => {
  localStorage.setItem(key, token);
};

export const getToken = () => {
  return localStorage.getItem(key);
};

export const removeToken = () => {
  localStorage.removeItem(key);
};
