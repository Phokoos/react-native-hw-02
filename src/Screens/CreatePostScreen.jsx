import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import { Button } from "react-native";
import { Image, StyleSheet, Text } from "react-native";
import { View } from "react-native";

const CreatePostScreen = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require("../../img/addPhoto.png")} style={styles.photo} />
      <Text style={styles.textUnderPhoto}>Редагувати фото</Text>
      <TextInput style={styles.textPhotoDesc} placeholder="Назва..." />

      <View style={styles.locationContainers}>
        <TextInput
          style={[{ paddingLeft: 28 }, styles.textPhotoDesc]}
          placeholder="Місцевість..."
        />
        <Image
          source={require("../../img/svgIcons/mapPin.png")}
          style={styles.mapIcon}
        />
      </View>
      {/* <Button onPress={() => navigate.navigate("PostsScreen")} title="назад" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  photo: {
    width: "100%",
    marginBottom: 8,

    borderRadius: 8,
  },
  textUnderPhoto: {
    marginBottom: 48,

    color: "#bdbdbd",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: 400,
  },
  textPhotoDesc: {
    paddingBottom: 15,
    marginBottom: 32,

    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    // fontWeight: 500,

    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  locationContainer: {
    position: "relative",
  },
  mapIcon: {
    position: "absolute",
    top: 3,
  },
});

export default CreatePostScreen;
