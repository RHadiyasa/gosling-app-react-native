// npx expo install redux react-redux
// expo untuk memastika redux yang diinstall sesuai dengan kebutuhan si Expo
// secara umum, tidak ada perbedaan antara redux yang digunakan di dalam react web
const INITIAL_STATE = {
  // loggedInUser: { username: "admin", email: "admin", id: "admin"},
  loggedInUser: {},
  message: "Hello Gosling",
};

export const userReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "LOGIN") {
    return { ...state, loggedInUser: action.payload };
  } else if (action.type === "LOGOUT") {
    return INITIAL_STATE;
  }
  return state;
};
