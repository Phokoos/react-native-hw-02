import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import UserPhoto from "../components/UserPhoto";
import { ScrollView } from "react-native";
import PortfolioPhoto from "../components/PortfolioPhoto";
import { Image } from "react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { logoutDB } from "../api/auth";

const ProfileScreen = () => {
  const navigation = useNavigation();

  handlePressLogOutIcon = async () => {
    await logoutDB();
    navigation.navigate("Login");
  };
  return (
    <ImageBackground
      source={require("../../img/Photo_BG.jpg")}
      resizeMode="cover"
      style={styles.backgroundImg}
    >
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.userWrapper}>
            <Pressable
              onPress={handlePressLogOutIcon}
              style={styles.logOutIcon}
            >
              <Image source={require("../../img/svgIcons/logOut.png")} />
            </Pressable>
            <UserPhoto />
            <Text style={styles.userName}>Natali Romanova</Text>
            <PortfolioPhoto
              path={require("../../img/userPortfolio/1_photo.png")}
              name="Ліс"
              comments={8}
              likes={153}
              locations="Ukraine"
            />
            <PortfolioPhoto
              path={require("../../img/userPortfolio/2_photo.png")}
              name="Старий будиночок у Венеції"
              comments={3}
              likes={200}
              locations="Ukraine"
            />
            <PortfolioPhoto
              path={require("../../img/userPortfolio/3_photo.png")}
              name="Старий будиночок у Венеції"
              comments={50}
              likes={200}
              locations="Italy"
            />
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",
    height: "100%",
    width: "100%",
  },
  backgroundImg: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
  userWrapper: {
    marginTop: 160,
    paddingHorizontal: 16,
    paddingTop: 92,
    width: "100%",
    backgroundColor: "white",
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
    position: "relative",
  },
  logOutIcon: {
    position: "absolute",
    right: 16,
    top: 22,
  },
  userName: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 33,

    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    fontWeight: 500,
    letterSpacing: 0.3,
  },
});

export default ProfileScreen;
