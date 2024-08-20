import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../components/CustomButton";

const ProfileScreen = ({ navigation }) => {
  const userSelector = useSelector((state) => state.loggedInUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
      payload: {},
    });

    navigation.navigate("Welcome");
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <View>
        <Text>Profile {userSelector.loggedInUser.email}</Text>
      </View>
      <View className="mt-3">
        <CustomButton title={"Logout"} onPress={handleLogout} />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
