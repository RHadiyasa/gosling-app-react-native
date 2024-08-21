import { Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import axiosInstance from "../service/axios";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    // Logic username and password cannot be empty
    // {} => object
    // () => Fungsi / method
    // [] => Array -> larik
    // <> => component
    if (username.length === 0 || password.length === 0) {
      alert("Username and password cannot be empty");
      return;
    }

    try {
      const response = await axiosInstance.get(`/users`, {
        params: { username, password },
      });

      const user = response.data[0]; // ambil index array pertama
      
      if (!user || user.password !== password) {
        alert("Invalid username or password");
        return;
      }

      alert(`Welcome, ${user.username}`);
      navigation.navigate("Main", {
        screen: "Home",
      });

      await AsyncStorage.setItem("loggedInUser", JSON.stringify(user));

      dispatch({
        type: "LOGIN",
        payload: user,
      });

    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <View>
        <Text className="font-bold text-xl">Login to Gosling App</Text>
      </View>
      <View className="w-full px-10 mt-5">
        <Text className="pl-1 mb-1 font-semibold">Username</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Username"
          className="bg-slate-300 py-2 px-5 rounded-lg"
        />
      </View>
      <View className="w-full px-10 mt-5">
        <Text className="pl-1 mb-1 font-semibold">Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
          className="bg-slate-300 py-2 px-5 rounded-lg"
        />
      </View>
      <View className="w-full px-10 mt-5">
        <CustomButton title={"Login"} onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
