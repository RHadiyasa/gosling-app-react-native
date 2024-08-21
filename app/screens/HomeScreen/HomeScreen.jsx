import { StatusBar, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InstagramHeader from "./Header/InstagramHeader";
import InstagramFeed from "./Feed/InstagramFeed";
import InstagramStory from "./Story/InstagramStory";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle={"dark-content"} />
      <View className="flex-1">
        <InstagramHeader />
        <InstagramStory />
        <InstagramFeed />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
