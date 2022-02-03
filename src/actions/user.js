export const UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';

export const updateLoginField = (newValue, name) => ({
  type: UPDATE_LOGIN_FIELD,
  value: newValue,
  name: name,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const saveUserData = (isLogged, nickname, token) => ({
  type: SAVE_USER_DATA,
  isLogged: isLogged,
  nickname: nickname,
  token: token,
});
