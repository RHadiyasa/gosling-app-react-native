import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const InstagramTabBar = () => {
  return (
    <View className="w-full flex-row justify-around items-center p-4 bg-white">
      <TouchableOpacity>
        <Ionicons name="home-outline" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="search-outline" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="add-circle-outline" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="heart-outline" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="person-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default InstagramTabBar;
