import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className="bg-blue-500 rounded-lg px-10"
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
        }}
      >
        <Text className="text-white font-bold">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
