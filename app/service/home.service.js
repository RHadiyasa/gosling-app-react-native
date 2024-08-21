import axiosInstance from "./axios";

export const getUserPosts = async () => {
  const response = await axiosInstance.get("/posts");
  return response.data;
};

export const getUserStories = async () => {
  const response = await axiosInstance.get("/stories");
  return response.data;
};

export const getUserData = async (id) => {
  const response = await axiosInstance.get(`/users/${id}`);
  return response.data;
};