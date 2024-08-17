import { Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};

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
