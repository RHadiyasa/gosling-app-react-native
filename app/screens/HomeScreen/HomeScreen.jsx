import { Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <View>
        <Text className="font-bold text-xl">Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
