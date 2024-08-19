import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Image, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const FeedContentList = ({
  id,
  username,
  likes,
  profileImage,
  image,
  caption,
}) => {
  return (
    <View key={id} className="mb-4">
      <View className="flex-row items-center p-4 gap-x-2">
        <Image
          source={{ uri: profileImage }}
          style={{ width: 30, height: 30, borderRadius: 15 }}
        />
        <Text className="font-bold">{username}</Text>
      </View>
      <Image
        source={{ uri: image }}
        style={{ width: "100%", aspectRatio: 1 }}
      />
      {/* Icons like, comment, saved */}
      <View className="flex-row justify-between px-4 mt-3">
        <View className="flex-row gap-x-3">
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={32} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="chatbubble-outline" size={32} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="paper-plane-outline" size={32} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <Ionicons name="bookmark-outline" size={32} color="black" />
        </View>
      </View>
      <View className="px-4 mt-2">
        <Text className="font-semibold">Liked by {likes} others</Text>
      </View>
      <View className="px-4">
        <Text className="font-bold">
          {username} <Text className="font-normal">{caption}</Text>
        </Text>
      </View>
    </View>
  );
};

export default FeedContentList;
