import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import trimUsername from "../../../lib/trimUsername";
import { useSelector } from "react-redux";
import { getUserData, getUserStories } from "../../../service/home.service";

const InstagramStory = () => {
  const userSelector = useSelector((state) => state.loggedInUser);
  const [storyData, setStoryData] = useState([]);
  const [userData, setUserData] = useState([]);

  const getStoryData = async () => {
    try {
      const userStory = await getUserStories();
      const userDetails = await getUserData(userSelector.loggedInUser.id);
      setStoryData(userStory);
      setUserData(userDetails);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (userSelector.loggedInUser) {
      getStoryData();
    }
  }, [userSelector.loggedInUser]);

  return (
    <View className="flex-row items-start bg-white">
      <ScrollView
        horizontal={true}
        className="p-3 gap-x-4"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 24 }}
      >
        <View className="items-center justify-between h-28">
          <Image
            source={{ uri: userData.profileImage }}
            style={{
              width: 80,
              height: 80,
              borderRadius: 100,
              resizeMode: "cover",
            }}
          />
          <Text>{userSelector.loggedInUser.username}</Text>
        </View>
        {storyData.map((story) => {
          return (
            <View className="items-center justify-between" key={story.id}>
              <LinearGradient
                colors={
                  story.closeFriend
                    ? ["#73fc03", "#0bfc03", "#0bfc03"]
                    : ["#CA1D7E", "#E35157", "#F2703F"]
                }
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 1.0 }}
                style={{
                  width: 88,
                  height: 88,
                  borderRadius: 100,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={{ uri: story.image }}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 100,
                    borderColor: "white",
                    borderWidth: 2,
                  }}
                />
              </LinearGradient>
              <Text>{trimUsername(story.username)}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default InstagramStory;
