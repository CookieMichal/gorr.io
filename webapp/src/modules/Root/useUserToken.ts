import {USER_TOKEN_KEY} from "@config/appSettings";

export interface UserToken {
  token: string;
  expiryDate: Date;
}

const getTokenFromStorage = (): UserToken | null => {
  try {
    return JSON.parse(localStorage.getItem(USER_TOKEN_KEY) ?? "null");
    // TODO: add type validation for parsed data
  } catch {
    return null;
  }
};

const setTokenInStorage = (value: UserToken) =>
  localStorage.setItem(USER_TOKEN_KEY, JSON.stringify(value));

const removeTokenFromStorage = () => localStorage.removeItem(USER_TOKEN_KEY);

let cache: UserToken | null = getTokenFromStorage();

const getToken = (): UserToken | null => {
  return cache;
};

const setToken = (value: UserToken | null) => {
  if (value !== null) {
    setTokenInStorage(value);
  } else {
    removeTokenFromStorage();
  }

  cache = value;
};

const useUserToken = (): [typeof getToken, typeof setToken] => [
  getToken,
  setToken,
];

export default useUserToken;
