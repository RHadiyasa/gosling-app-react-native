import { FlatList, ScrollView, StatusBar, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import InstagramHeader from "./Header/InstagramHeader";
import InstagramFeed from "./Feed/InstagramFeed";
import InstagramStory from "./Story/InstagramStory";

const HomeScreen = () => {
  const route = useRoute();
  const userData = route.params;

  console.log("user: ", userData);
  
  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle={"dark-content"} />
      <View className="flex-1">
        <InstagramHeader />
        <ScrollView>
          <InstagramStory userData={userData} />
          <InstagramFeed />
        </ScrollView>
        {/* <InstagramTabBar /> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
