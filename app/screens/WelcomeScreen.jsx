import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const logoUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh7-vEiaFpPrnfIzPo7V-Y1behZWWR-AkAVg&s";

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView className="flex-1">
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image source={{ uri: logoUrl }} width={100} height={100} />
        <View className="mt-5" style={{ gap: 10 }}>
          <Text className="font-bold text-2xl text-center">Gosling App</Text>
          <View className="flex-row" style={{ gap: 10 }}>
            {/* Custom Button */}
            <CustomButton title={"Login"} onPress={handleLogin} />
            <CustomButton title={"Register"} onPress={handleRegister} />
            {/* <Button title="Login" />
            <Button title="Register" /> */}
          </View>

          {/* Cek dulu */}

        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    backgroundColor: "blue",
    fontSize: 17,
    padding: 10,
    borderRadius: 10,
    color: "#FFF",
  },
});
