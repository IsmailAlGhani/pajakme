import axios from 'axios';

const setToken = (payload) => ({ type: "SET_TOKEN", payload})

export const logUserOut = () => dispatch => {
  dispatch({type: "LOG_OUT"});
}

export const fetchAccount = (userInfo) => dispatch => {
  axios.post(`https://reqres.in/api/login`, userInfo)
  .then(data => {
    localStorage.setItem("token", data.data.token);
    dispatch(setToken({token: data.data.token, id: 1}));
  })
}

export const autoLogin = () => dispatch => {
  if (localStorage.getItem("token")) {
    dispatch(setToken({token: localStorage.getItem("token"), id: 1}));
  } else {
    dispatch(logUserOut());
  }
}