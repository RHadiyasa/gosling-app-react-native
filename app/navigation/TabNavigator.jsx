import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExploreScreen from "../screens/HomeScreen/ExploreScreen";
import AddPost from "../screens/HomeScreen/AddPost";
import NotificationScreen from "../screens/HomeScreen/NotificationScreen";
import ProfileScreen from "../screens/HomeScreen/ProfileScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Ionicons name="search-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={AddPost}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Ionicons name="add-circle-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Ionicons name="heart-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Ionicons name="person-outline" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
