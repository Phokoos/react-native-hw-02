import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";

const COURSES = [
  {
    id: "45k6-j54k-4jth",
    title: "HTML",
  },
  {
    id: "4116-jfk5-43rh",
    title: "JavaScript",
  },
  {
    id: "4d16-5tt5-4j55",
    title: "React",
  },
  {
    id: "LG16-ant5-0J25",
    title: "React Native",
  },
  {
    id: "LG16-n213-0J25",
    title: "Node.js",
  },
];

export default function App() {
  const [courses, setCourses] = useState(COURSES);

  return (
    <>
      <RegistrationScreen />
    </>
    // <SafeAreaView style={styles.container}>
    //   <FlatList
    //     data={courses}
    //     renderItem={({ item }) => <Text>- {item.title}</Text>}
    //     keyExtractor={(item) => item.id}
    //   />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
});
