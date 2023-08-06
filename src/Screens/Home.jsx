import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import { Image } from "react-native";
import Svg from "react-native-svg";

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator initialRouteName={"PostsScreen"}>
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публікації",
          tabBarLabel: "",
          headerTitleAlign: "center",
          // tabBarIcon: ({ size, focused, color }) => {
          //   return (
          //     <Image
          //       style={{ width: size, height: size }}
          //       source={require("../../img/svgIcons/newPost.png")}
          //     />
          //   );
          // },
          tabBarIcon: () => (
            <Image
              style={{ width: 70, height: 40 }}
              source={require("../../img/svgIcons/newPost.png")}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default Home;
