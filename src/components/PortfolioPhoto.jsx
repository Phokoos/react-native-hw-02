import { Text } from "react-native";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";

const PortfolioPhoto = ({ path, name, comments, likes, locations }) => {
  return (
    <View style={styles.photoContainer}>
      <Image source={path} style={styles.photo} />
      <Text style={styles.photoName}>{name}</Text>
      <View style={styles.descriptionPhoto}>
        <View style={styles.reviewsPart}>
          <View style={styles.reviewsBlock}>
            <Image source={require("../../img/svgIcons/comment.png")} />
            <Text style={styles.reviewsText}>{comments}</Text>
          </View>
          <View style={styles.reviewsBlock}>
            <Image source={require("../../img/svgIcons/like.png")} />
            <Text style={styles.reviewsText}>{likes}</Text>
          </View>
        </View>
        <View style={styles.locationBlock}>
          <Image source={require("../../img/svgIcons/mapPin.png")} />
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
    // justifyContent: "space-evenly",
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
