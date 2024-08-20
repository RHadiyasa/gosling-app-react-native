import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const ExploreScreen = () => {
  const userSelector = useSelector((state) => state.loggedInUser);

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <View>
        <Text>Explore {userSelector.loggedInUser.username}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ExploreScreen;
