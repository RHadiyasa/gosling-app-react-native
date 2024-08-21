import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, TouchableOpacity } from "react-native";
import { View, Image, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getUserPosts } from "../../../service/home.service";

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const postsData = await getUserPosts();
      setPosts(postsData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <View className="flex-1 w-full bg-white">
      <StatusBar style="auto" />

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View key={item.id} className="mb-4">
              <View className="flex-row items-center p-4 gap-x-2">
                <Image
                  source={{ uri: item.profileImage }}
                  style={{ width: 30, height: 30, borderRadius: 15 }}
                />
                <Text className="font-bold">{item.username}</Text>
              </View>
              <Image
                source={{ uri: item.image }}
                style={{ width: "100%", aspectRatio: 1 }}
              />
              {/* Icons like, comment, saved */}
              <View className="flex-row justify-between px-4 mt-3">
                <View className="flex-row gap-x-3">
                  <TouchableOpacity>
                    <Ionicons name="heart-outline" size={32} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Ionicons
                      name="chatbubble-outline"
                      size={32}
                      color="black"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Ionicons
                      name="paper-plane-outline"
                      size={32}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Ionicons name="bookmark-outline" size={32} color="black" />
                </View>
              </View>
              <View className="px-4 mt-2">
                <Text className="font-semibold">
                  Liked by {item.likes} others
                </Text>
              </View>
              <View className="px-4">
                <Text className="font-bold">
                  {item.username}{" "}
                  <Text className="font-normal">{item.caption}</Text>
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
    // <View className="w-full bg-white">
    //   {posts.map((post) => (
    //     <View key={post.id} className="mb-4">
    //       <View className="flex-row items-center p-4 gap-x-2">
    //         <Image source={{ uri: post.profileImage }} width={30} height={30} />
    //         <Text className="font-bold">{post.username}</Text>
    //       </View>
    //       <Image
    //         source={{ uri: post.image }}
    //         style={{ resizeMode: "cover", aspectRatio: 1 / 1 }}
    //       />
    //       {/* icons like, comment, saved */}
    //       <View className="flex-row justify-between px-4 mt-3">
    //         <View className="flex-row gap-x-3">
    //           <TouchableOpacity>
    //             <Ionicons name="heart-outline" size={32} color="black" />
    //           </TouchableOpacity>
    //           <TouchableOpacity>
    //             <Ionicons name="chatbubble-outline" size={32} color="black" />
    //           </TouchableOpacity>
    //           <TouchableOpacity>
    //             <Ionicons name="paper-plane-outline" size={32} color="black" />
    //           </TouchableOpacity>
    //         </View>
    //         <View>
    //           <Ionicons name="bookmark-outline" size={32} color="black" />
    //         </View>
    //       </View>
    //       <View className="px-4 mt-2">
    //         <Text className="font-semibold">Liked by {post.likes} others</Text>
    //       </View>
    //       <View className="px-4">
    //         <Text className="font-bold">
    //           {post.username}{" "}
    //           <Text className="font-normal">{post.caption}</Text>
    //         </Text>
    //       </View>
    //     </View>
    //   ))}

    // </View>
  );
};

export default InstagramFeed;
