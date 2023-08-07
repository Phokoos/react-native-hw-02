import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { Pressable } from "react-native";
import { Button } from "react-native";
import { Image, StyleSheet, Text } from "react-native";
import { View } from "react-native";

const CreatePostScreen = () => {
  const navigate = useNavigation();

  const [disabledBtn, setDisabledBtn] = useState(true);
  const [photoName, setPhotoName] = useState("");
  const [inputLocation, setInputLocation] = useState("");

  const handleDelete = () => {
    setInputLocation(""), setPhotoName("");
  };

  useEffect(() => {
    if (photoName !== "" && inputLocation !== "") {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [photoName, inputLocation]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-550}
      >
        <View style={styles.container}>
          <View style={styles.photoContainer}>
            <Image
              source={require("../../img/addPhoto.png")}
              style={styles.photo}
            />
            <Image
              source={require("../../img/svgIcons/addPhoto.png")}
              style={styles.addPhotoIcon}
            />
          </View>

          <Text style={styles.textUnderPhoto}>Редагувати фото</Text>
          <TextInput
            value={photoName}
            onChangeText={setPhotoName}
            style={styles.textPhotoDesc}
            placeholder="Назва..."
          />

          <View style={styles.locationContainers}>
            <TextInput
              value={inputLocation}
              onChangeText={setInputLocation}
              style={[{ paddingLeft: 28 }, styles.textPhotoDesc]}
              placeholder="Місцевість..."
            />
            <Image
              source={require("../../img/svgIcons/mapPin.png")}
              style={styles.mapIcon}
            />
          </View>
          <Pressable
            disabled={disabledBtn}
            style={({ pressed, disabled }) => [
              styles.primaryBtn,
              pressed && styles.activePrimaryBtn,
              disabledBtn && styles.disabledBtn,
            ]}
          >
            <Text
              style={[
                styles.textPrimaryBtn,
                disabledBtn && styles.disabledBtnText,
              ]}
            >
              Опублікувати
            </Text>
          </Pressable>
          <View style={styles.bottomDeleteContainer}>
            <Pressable onPress={handleDelete}>
              <Image source={require("../../img/svgIcons/delete.png")} />
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  photoContainer: {
    position: "relative",
  },
  photo: {
    width: "100%",
    marginBottom: 8,

    borderRadius: 8,
  },
  addPhotoIcon: {
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    top: 90,
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
  primaryBtn: {
    minHeight: 51,
    maxHeight: 51,
    marginBottom: "auto",

    flex: 1,
    paddingVertical: 16,
    flexDirection: "column",
    alignItems: "center",

    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  activePrimaryBtn: {
    backgroundColor: "#E8470C",
    shadowColor: "#3B1703",
    shadowOffset: { height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  textPrimaryBtn: {
    color: "white",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
  },
  disabledBtn: {
    backgroundColor: "#f6f6f6",
  },
  disabledBtnText: {
    color: "#bdbdbd",
  },
  bottomDeleteContainer: {
    maxHeight: 71,

    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#FFFFFF",
    borderTopColor: "#E8E8E8",
    borderTopWidth: 1,
  },
});

export default CreatePostScreen;
