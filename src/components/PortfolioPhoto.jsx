import { Pressable, Text } from "react-native";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CommentsScreen from "../Screens/CommentsScreen";
import { createStackNavigator } from "@react-navigation/stack";

const PortfolioPhoto = ({ path, name, comments, likes, locations }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.photoContainer}>
      <Image source={path} style={styles.photo} />
      <Text style={styles.photoName}>{name}</Text>
      <View style={styles.descriptionPhoto}>
        <View style={styles.reviewsPart}>
          <View style={styles.reviewsBlock}>
            {comments > 0 ? (
              <Pressable
                onPress={() => {
                  navigation.navigate("Comments");
                }}
              >
                <Image source={require("../../img/svgIcons/comment.png")} />
              </Pressable>
            ) : (
              <Image source={require("../../img/svgIcons/commentGrey.png")} />
            )}
            <Text
              style={[
                styles.reviewsText,
                comments === 0 && { color: "#bdbdbd" },
              ]}
            >
              {comments}
            </Text>
          </View>
          {likes && (
            <View style={styles.reviewsBlock}>
              <Image source={require("../../img/svgIcons/like.png")} />
              <Text style={styles.reviewsText}>{likes}</Text>
            </View>
          )}
        </View>
        <View style={styles.locationBlock}>
          <Pressable
            onPress={() => {
              navigation.navigate("Map", {
                state: {
                  latitude: 48.296900931371106,
                  longitude: 25.9244770620231,
                },
              });
            }}
          >
            <Image source={require("../../img/svgIcons/mapPin.png")} />
          </Pressable>

          <Text style={styles.locationText}>{locations}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  photoContainer: {
    marginBottom: 34,
  },
  photo: {
    width: "100%",
    marginBottom: 8,
    borderRadius: 8,
  },
  photoName: {
    marginBottom: 8,

    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    fontWeight: 500,
  },
  descriptionPhoto: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  reviewsPart: {
    display: "flex",
    flexDirection: "row",
    gap: 24,
  },
  reviewsBlock: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  reviewsText: {
    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: 400,
  },
  locationBlock: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  locationText: {
    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: 400,
    textDecorationLine: "underline",
  },
});

export default PortfolioPhoto;
