import { useNavigation } from "@react-navigation/native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  Platform,
  ActivityIndicator,
} from "react-native";
import { Pressable } from "react-native";
import { Image, StyleSheet, Text } from "react-native";
import { View } from "react-native";

const CreatePostScreen = () => {
  const navigate = useNavigation();

  const [disabledBtn, setDisabledBtn] = useState(true);
  const [photoName, setPhotoName] = useState("");
  const [inputLocation, setInputLocation] = useState("");
  const [location, setLocation] = useState(null);
  const [loader, setLoader] = useState(false);

  const handleDelete = () => {
    setInputLocation(""), setPhotoName("");
    setPhotoUri(null);
  };

  useEffect(() => {
    if (photoName !== "" && inputLocation !== "" && photoUri !== null) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [photoName, inputLocation, photoUri]);

  const [hasPermission, setHasPermission] = useState(null);
  const [hasPermissionLocation, setHasPermissionLocation] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photoUri, setPhotoUri] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      setHasPermissionLocation(status === "granted");
    })();
  }, []);

  const handlePressPublish = async () => {
    setLoader(true);
    let location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    console.log(coords);

    setLocation(coords);
    setPhotoUri(null);
    setPhotoName("");
    setInputLocation("");
    setLoader(false);

    navigate.goBack();
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  if (hasPermissionLocation === null) {
    return <View />;
  }
  if (hasPermissionLocation === false) {
    return <Text>No access to location</Text>;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-550}
    >
      <View style={styles.container}>
        {loader ? (
          <ActivityIndicator
            size="large"
            color="#FF6C00"
            style={{ height: 240 }}
          />
        ) : (
          <View style={styles.photoContainer}>
            {!photoUri ? (
              <View style={styles.photo}>
                <Camera
                  style={{ height: 240 }}
                  type={type}
                  ref={setCameraRef}
                />
                <Pressable
                  onPress={async () => {
                    if (cameraRef) {
                      const { uri } = await cameraRef.takePictureAsync();
                      await MediaLibrary.createAssetAsync(uri);
                      setPhotoUri(uri);
                    }
                  }}
                  style={styles.addPhotoIcon}
                >
                  <Image source={require("../../img/svgIcons/addPhoto.png")} />
                </Pressable>
              </View>
            ) : (
              <View style={styles.photo}>
                <Image
                  style={{
                    width: "100%",
                    height: 240,
                  }}
                  source={{
                    uri: photoUri,
                  }}
                />
                <Pressable
                  style={styles.addPhotoIcon}
                  onPress={() => setPhotoUri(null)}
                >
                  <Image source={require("../../img/svgIcons/addPhoto.png")} />
                </Pressable>
              </View>
            )}
          </View>
        )}

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
          <Pressable
            style={styles.mapIcon}
            onPress={() => {
              navigate.navigate("Map", {
                state: {
                  latitude: 48.296900931371106,
                  longitude: 25.9244770620231,
                },
              });
            }}
          >
            <Image source={require("../../img/svgIcons/mapPin.png")} />
          </Pressable>
        </View>
        <Pressable
          disabled={disabledBtn}
          style={({ pressed }) => [
            styles.primaryBtn,
            pressed && styles.activePrimaryBtn,
            disabledBtn && styles.disabledBtn,
          ]}
          onPress={handlePressPublish}
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
    position: "relative",
    width: "100%",
    height: 240,
    marginBottom: 8,

    borderRadius: 8,
  },
  addPhotoIcon: {
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    top: 90,
  },
  addPhotoIconWithCamera: {
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "red",
    top: 0,
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

    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  locationContainer: {
    position: "relative",
  },
  mapIcon: {
    position: "absolute",
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
