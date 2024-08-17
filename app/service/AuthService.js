import axiosInstance from "./axios";

const AuthService = () => {
  const register = async (username, email, password) => {
    try {
      const response = await axiosInstance.post("/users", {
        username,
        email,
        password,
      });

      console.log(response.data);

      return response.data;
    } catch (error) {
      console.error(error.message);
    }
  };

  const login = () => {};
  const logout = () => {};

  return {
    register,
    login,
    logout,
  };
};

export default AuthService;
