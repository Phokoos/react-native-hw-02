import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../Screens/PostsScreen";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import CreatePostScreen from "../Screens/CreatePostScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ArrowBack from "../components/ArrowBack";

const Tabs = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const navigation = useNavigation();
  return (
    <Tabs.Navigator
      initialRouteName={"PostsScreen"}
      screenOptions={{
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarStyle: styles.tabBatStyle,
        tabBarItemStyle: styles.tabBarIconStyle,
      }}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публікації",
          tabBarLabel: "",
          headerTitleAlign: "center",

          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Login")}
              style={{ marginRight: 16 }}
            >
              <Image source={require("../../img/svgIcons/logOut.png")} />
            </Pressable>
          ),
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
  tabBatStyle: {
    height: 83,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tabBarIconStyle: {
    marginTop: 9,
    marginBottom: 34,
    marginHorizontal: 10,
    maxWidth: 70,
    height: 40,

    paddingTop: 12,

    borderRadius: 20,
  }, // tabIconGrid: {
  //   marginTop: 45,
  //   marginBottom: 34,
  //   // width: 70,
  //   // height: 40,
  // },
  // tabIconAdd: {
  //   marginTop: 45,
  //   marginBottom: 34,
  //   width: 70,
  //   height: 40,
  // },
  // tabIconUser: {
  //   marginTop: 45,
  //   marginBottom: 34,
  // },
  // tabBarLabel: {
  //   // height: 100,
  //   backgroundColor: "red",
  // },
});

export default BottomTabNavigator;
