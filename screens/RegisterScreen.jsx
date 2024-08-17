import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {};

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <View>
        <Text className="font-bold text-xl">Register to Gosling App</Text>
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
        <Text className="pl-1 mb-1 font-semibold">Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
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
        <Text className="pl-1 mb-1 font-semibold">Confirm Password</Text>
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm Password"
          secureTextEntry={true}
          className="bg-slate-300 py-2 px-5 rounded-lg"
        />
      </View>
      <View className="w-full px-10 mt-5">
        <CustomButton title={"Register"} onPress={handleRegister} />
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
