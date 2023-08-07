import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import { Image } from "react-native";
import Svg from "react-native-svg";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import CreatePostScreen from "./CreatePostScreen";
import ProfileScreen from "./ProfileScreen";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Tabs = createBottomTabNavigator();

const ArrowBack = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={{
        paddingLeft: 16,
        paddingTop: 7,
      }}
      onPress={() => navigation.navigate("PostsScreen")}
    >
      <Image
        source={require("../../img/svgIcons/arrowLeft.png")}
        style={{
          height: 24,
          width: 24,
        }}
      />
    </Pressable>
  );
};

const Home = () => {
  return (
    <Tabs.Navigator
      initialRouteName={"PostsScreen"}
      // barStyle={{
      //   height: 83,
      //   backgroundColor: "red",
      // }}
      screenOptions={{
        tabBarStyle: {
          height: 83,
        },
      }}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публікації",
          tabBarLabel: "",
          headerTitleAlign: "center",
          tabBarIcon: () => (
            <Image
              style={styles.tabIconGrid}
              source={require("../../img/svgIcons/grid.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePostScreen"
        component={CreatePostScreen}
        options={{
          title: "Створити публікацію",
          tabBarLabel: "",
          headerTitleAlign: "center",
          headerLeft: ArrowBack,
          tabBarStyle: { display: "none" },
          tabBarIcon: () => (
            <Image
              style={styles.tabIconAdd}
              source={require("../../img/svgIcons/newPost.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: "Публікації",
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={styles.tabIconUser}
              source={require("../../img/svgIcons/user.png")}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIconGrid: {
    marginTop: 45,
    marginBottom: 34,
    // width: 70,
    // height: 40,
  },
  tabIconAdd: {
    marginTop: 45,
    marginBottom: 34,
    width: 70,
    height: 40,
  },
  tabIconUser: {
    marginTop: 45,
    marginBottom: 34,
  },
  // tabBarLabel: {
  //   // height: 100,
  //   backgroundColor: "red",
  // },
});

export default Home;
