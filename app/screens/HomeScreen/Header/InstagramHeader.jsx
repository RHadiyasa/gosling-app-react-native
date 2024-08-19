import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const InstagramHeader = () => {
  const imgUrl =
    "https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png";

  return (
    <View className="w-full flex-row justify-between items-center p-4 px-5 bg-white">
      <Image  source={{ uri: imgUrl }} style={{ width: 100, height: 30 }}/>
      <View className="flex-row space-x-4">
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InstagramHeader;
