import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 700 }}>Inline Styling</Text>
      </View>
      <View className="bg-blue-300 p-3 mt-4 rounded-lg">
        <Text className="font-bold">Tailwind CSS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    backgroundColor: "blue",
    fontSize: 17,
    padding: 10,
    borderRadius: 10,
    color: "#FFF",
  },
});
