import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import trimUsername from "../../../lib/trimUsername";

const InstagramStory = ({ userData }) => {
  const userImageUrl =
    "https://instagram.fmlg11-1.fna.fbcdn.net/v/t51.2885-19/436401939_1139091060612427_463883755798944200_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fmlg11-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=4pnSJOG1vP0Q7kNvgFBHYFB&edm=AAAAAAABAAAA&ccb=7-5&oh=00_AYAEU-WyvrJ55kHfKmog9v4mmo6xWWK801VIZ2unZ54b_A&oe=66C79507&_nc_sid=328259";

  const storyData = [
    {
      id: 1,
      username: "dyndaura",
      closeFriend: true,
      image:
        "https://instagram.fmlg11-1.fna.fbcdn.net/v/t51.2885-19/452384389_446893531672706_4806971818076007939_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fmlg11-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=-f_PcemT-H8Q7kNvgGfjT3G&edm=AAAAAAABAAAA&ccb=7-5&oh=00_AYBYZCw0cYEmDuWdfhx8bulv3wRVR-VUXbi9mWOkr5fmOQ&oe=66C79CB2&_nc_sid=328259",
    },
    {
      id: 2,
      username: "_chiquitaal",
      closeFriend: false,
      image:
        "https://instagram.fbho1-4.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fbho1-4.fna.fbcdn.net&_nc_cat=1&_nc_ohc=6NJWugt9eTQQ7kNvgE-8iyB&edm=ALlQn9MBAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AYBuy-02zy_nFcmn1cXhy8HdLsFKT_b4OCuzKVlFzymeYA&oe=66C7800F&_nc_sid=e7f676",
    },
    {
      id: 3,
      username: "raymondchin",
      closeFriend: false,
      image:
        "https://instagram.fmlg11-1.fna.fbcdn.net/v/t51.2885-19/185568242_1189055651528363_7275736340964160289_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fmlg11-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=9KqDD7epBtQQ7kNvgHwDiT-&edm=AAAAAAABAAAA&ccb=7-5&oh=00_AYDpibhW3sQ0cOjBOZ6lx35_9bd46UIySC1RyJi5xmMbtg&oe=66C7A565&_nc_sid=328259",
    },
    {
      id: 4,
      username: "aniesbaswedan",
      closeFriend: false,
      image:
        "https://instagram.fmlg11-1.fna.fbcdn.net/v/t51.2885-19/441499762_454155743678812_2182652073284764397_n.jpg?_nc_ht=instagram.fmlg11-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=LQ8UuoVW2IEQ7kNvgGBvdXx&edm=AFg4Q8wBAAAA&ccb=7-5&oh=00_AYCAa3o2pbQDB7IE1e57jHbJEJG_avVV8Tfk9eQM3_3JRg&oe=66C7A706&_nc_sid=0b30b7",
    },
    {
      id: 5,
      username: "ilhamrrg",
      closeFriend: false,
      image:
        "https://instagram.fmlg11-1.fna.fbcdn.net/v/t51.2885-19/445798507_7495268033884181_327152733178646743_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fmlg11-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=qrWwXVONhLwQ7kNvgH7APpr&edm=AAAAAAABAAAA&ccb=7-5&oh=00_AYA2tXz1Gk4psoP8LwhKYvpSTrRs00P2eMJffBOBB-1GoA&oe=66C7A077&_nc_sid=328259",
    },
  ];
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
            source={{ uri: userImageUrl }}
            style={{
              width: 80,
              height: 80,
              borderRadius: 100,
              resizeMode: "cover",
            }}
          />
          <Text>{userData.username}</Text>
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
