import { Image, StyleSheet, Text, View } from "react-native";

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 16,
    paddingVertical: 32,

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
