import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, ScrollView, TouchableOpacity } from "react-native";
import { View, Image, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FeedContentList from "./Content/FeedContentList";

const InstagramFeed = () => {
  const posts = [
    {
      id: 1,
      username: "jktinfo",
      likes: "1.5k",
      profileImage:
        "https://instagram.fmlg11-1.fna.fbcdn.net/v/t51.2885-19/47201831_1132789950216504_1484984994131607552_n.jpg?stp=dst-jpg_e0_s150x150&_nc_ht=instagram.fmlg11-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=D5KTkfQO95AQ7kNvgGlzB8X&edm=ADW0ovcBAAAA&ccb=7-5&oh=00_AYCxy0aUUAM3M6U-eQv3AST6ezzoLA9oMWC-m489-QIH0Q&oe=66C790CB&_nc_sid=db7772",
      image:
        "https://instagram.fmlg11-1.fna.fbcdn.net/v/t39.30808-6/456108861_18370857808097644_7008721305270392886_n.jpg?se=7&stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYzMDgwOCJ9&_nc_ht=instagram.fmlg11-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=VlFpqsTSDHcQ7kNvgGXyfs5&edm=ADW0ovcAAAAA&ccb=7-5&ig_cache_key=MzQzNzI0MTk3OTIwMDM0NjQ1Mw%3D%3D.2-ccb7-5&oh=00_AYCar5kqkzH4rrdKsSvtDA0zCOVFrsadk8YGCwLvQ2lHwg&oe=66C77E23&_nc_sid=db7772",
      caption:
        "Presiden RI Terpilih, Prabowo Subianto, menyatakan bahwa Upacara Peringatan Detik-Detik Proklamasi Kemerdekaan Republik Indonesia pada tahun 2025 akan kembali dilaksanakan di Istana Negara, Ibu Kota Nusantara, Kalimantan Timur.",
    },
    {
      id: 2,
      username: "pandemictalks",
      likes: "1.1k",
      profileImage:
        "https://instagram.fmlg11-1.fna.fbcdn.net/v/t51.2885-19/93029885_2878621905557646_6465261102992195584_n.jpg?stp=dst-jpg_e0_s150x150&_nc_ht=instagram.fmlg11-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=6HqlQ9g3KF4Q7kNvgG_MnxH&edm=ADW0ovcBAAAA&ccb=7-5&oh=00_AYArWtdNt58L9jiX74xpZWdH7U619klnmKJUMoZdFXsnPw&oe=66C7AC83&_nc_sid=db7772",
      image:
        "https://instagram.fmlg11-1.fna.fbcdn.net/v/t51.29350-15/455968657_1940062096476207_2859509499257948917_n.jpg?se=7&stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMzUweDE2ODcuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.fmlg11-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=Pl819jiTGGQQ7kNvgGQMFrG&edm=ADW0ovcBAAAA&ccb=7-5&ig_cache_key=MzQzNzA5NTk3MTQ0MzAyMDE1Ng%3D%3D.2-ccb7-5&oh=00_AYDbgIquJIfV6Bl3p3a4wzkLGDvGkMtXxWuzFLuf28PVng&oe=66C79E80&_nc_sid=db7772",
      caption:
        "Gaduhnya kematian dokter PPDS (Program Pendidikan Dokter Spesialis) di Universitas Diponegoro memunculkan beragam kesaksian bullying pada ranah kedokteran. Terlepas dari bantahan keluarga terkait penyebab meninggalnya bukan karena bunuh diri, fenomena bullying disebut-sebut memang sudah lama terjadi.",
    },
    // Add more posts here
  ];

  return (
    <View className="w-full bg-white">
      <StatusBar style="auto" />

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <FeedContentList
              id={item.id}
              username={item.username}
              likes={item.likes}
              profileImage={item.profileImage}
              image={item.image}
              caption={item.caption}
            />
          );
        }}
      />
    </View>
  );
};

export default InstagramFeed;
