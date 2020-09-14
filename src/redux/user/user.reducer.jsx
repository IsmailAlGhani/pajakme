const defaultState = {
  loggedIn: false,
};

const userReducer = (state = defaultState, action) => {
  switch(action.type){
    case "SET_TOKEN":
      return {
        loggedIn: true,
        ...action.payload
      }
    case "LOG_OUT":
      localStorage.clear()
      return {
        loggedIn: false,
      }
    default: return state
  }
};

export default userReducer;