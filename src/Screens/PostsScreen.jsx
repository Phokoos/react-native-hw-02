import { ScrollView } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import PortfolioPhoto from "../components/PortfolioPhoto";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image
          source={require("../../img/User.jpg")}
          style={styles.userPhoto}
        />
        <View style={styles.userInfoContainer}>
          <Text style={styles.userNameText}>Natali Romanova</Text>
          <Text style={styles.userEmailText}>email@example.com</Text>
        </View>
      </View>
      <ScrollView style={{ marginTop: 90 }}>
        <PortfolioPhoto
          path={require("../../img/userPortfolio/1_photo.png")}
          name="Ліс"
          comments={0}
          locations="Ivano-Frankivs'k Region, Ukraine"
        />
        <PortfolioPhoto
          path={require("../../img/userPortfolio/2_photo.png")}
          name="Старий будиночок у Венеції"
          comments={0}
          likes={2}
          locations="Ukraine"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 16,
    paddingTop: 32,

    backgroundColor: "#FFFFFF",
  },
  userContainer: {
    flex: 1,
    flexWrap: "nowrap",
    flexDirection: "row",
  },
  userPhoto: {
    width: 60,
    height: 60,
    marginRight: 8,
  },
  userInfoContainer: {
    height: 60,
    flex: 1,
    justifyContent: "center",
  },
  userNameText: {
    color: "#212121",
    fontFamily: "Roboto-Bold",
    fontSize: 13,
  },
  userEmailText: {
    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontSize: 11,
  },
});

export default PostsScreen;
