import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import TabNavigator from "./TabNavigator";
import { useDispatch, useSelector } from "react-redux";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [loading, setLoading] = useState(true);
  const userSelector = useSelector((state) => state.loggedInUser);
  const dispatch = useDispatch();

  // Check local storage apakah ada user yang sudah login
  const checkLoggedInUser = async () => {
    const loggedInUser = await AsyncStorage.getItem("loggedInUser");

    // Kalau ada loggedInUser maka kita akan ambil, dan dispatch ke dalam store user
    if (loggedInUser) {
      dispatch({
        type: "LOGIN",
        payload: JSON.parse(loggedInUser),
      });
    }
    // Simulasi fetch data
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    checkLoggedInUser();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Stack.Navigator
      initialRouteName={userSelector.loggedInUser.id ? "Main" : "Welcome"}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
