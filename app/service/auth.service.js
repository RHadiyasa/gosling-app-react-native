import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "./axios";

const AuthService = () => {
  const register = async (username, email, password) => {
    try {
      const response = await axiosInstance.post("/users", {
        username,
        email,
        password,
      });

      return response.data;
    } catch (error) {
      console.error(error.message);
    }
  };

  const login = async (username, password) => {
    try {
      const response = await axiosInstance.get(`/users`, {
        params: { username, password },
      });
      return response.data;
    } catch (error) {
      console.error(error.message);
    }
  };
  const logout = async () => {
    await AsyncStorage.removeItem("loggedInUser");
  };

  return {
    register,
    login,
    logout,
  };
};

export default AuthService;
