import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "react-native";

export const UserPhoto = () => {
  return (
    <View style={styles.photoCard}>
      <Image source={require("../../img/User.png")} />
      <AntDesign
        style={styles.plusIcon}
        name="pluscircleo"
        size={26}
        color="#FF6C00"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  photoCard: {
    width: 120,
    height: 120,
    position: "absolute",
    top: -63,
    alignSelf: "center",

    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  plusIcon: {
    position: "absolute",
    right: -13,
    bottom: 20,
  },
});

export default UserPhoto;
