import { useState } from "react";
import {
  Button,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const RegistrationScreen = () => {
  const [inputBackgroundColorLogin, setInputBackgroundColorLogin] =
    useState("#F6F6F6");
  const [inputBorderColorLogin, setInputBorderColorLogin] = useState("#E8E8E8");
  const [inputBackgroundColorEmail, setInputBackgroundColorEmail] =
    useState("#F6F6F6");
  const [inputBorderColorEmail, setInputBorderColorEmail] = useState("#E8E8E8");
  const [inputBackgroundColorPassword, setInputBackgroundColorPassword] =
    useState("#F6F6F6");
  const [inputBorderColorPassword, setInputBorderColorPassword] =
    useState("#E8E8E8");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-185}
      >
        <View style={styles.container}>
          <ImageBackground
            source={require("../../img/Photo_BG.jpg")}
            resizeMode="cover"
            style={styles.backgroundImg}
          >
            <View style={styles.registrationWrapper}>
              <Text style={styles.title}>Реєстрація</Text>
              <TextInput
                style={[
                  {
                    backgroundColor: inputBackgroundColorLogin,
                    borderColor: inputBorderColorLogin,
                  },
                  styles.textInput,
                ]}
                placeholder="Логін"
                onFocus={() => {
                  setInputBackgroundColorLogin("#FFFFFF");
                  setInputBorderColorLogin("#FF6C00");
                }}
                onBlur={() => {
                  setInputBackgroundColorLogin("#F6F6F6");
                  setInputBorderColorLogin("#E8E8E8");
                }}
              />
              <TextInput
                style={[
                  {
                    backgroundColor: inputBackgroundColorEmail,
                    borderColor: inputBorderColorEmail,
                  },
                  styles.textInput,
                ]}
                placeholder="Адреса електронної пошти"
                onFocus={() => {
                  setInputBackgroundColorEmail("#FFFFFF");
                  setInputBorderColorEmail("#FF6C00");
                }}
                onBlur={() => {
                  setInputBackgroundColorEmail("#F6F6F6");
                  setInputBorderColorEmail("#E8E8E8");
                }}
              />
              <TextInput
                style={[
                  {
                    backgroundColor: inputBackgroundColorPassword,
                    borderColor: inputBorderColorPassword,
                  },
                  styles.textInput,
                ]}
                placeholder="Пароль"
                onFocus={() => {
                  setInputBackgroundColorPassword("#FFFFFF");
                  setInputBorderColorPassword("#FF6C00");
                }}
                onBlur={() => {
                  setInputBackgroundColorPassword("#F6F6F6");
                  setInputBorderColorPassword("#E8E8E8");
                }}
                secureTextEntry={true}
              />
              <Pressable style={styles.primaryBtn}>
                <Text style={styles.textPrimaryBtn}>Зареєстуватися</Text>
              </Pressable>
              <Text style={styles.textSignIn}>Вже є акаунт? Увійти</Text>
              <Pressable
                style={{
                  position: "absolute",
                  bottom: 219,
                  right: 50,
                }}
                onPress={(event) => {
                  console.log(event);
                }}
              >
                <Text style={{ color: "red" }}>Показати</Text>
              </Pressable>
            </View>
            <Image
              style={styles.addImage}
              source={require("../../img/add_photo.png")}
            ></Image>
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "100%",
    width: "100%",
  },
  backgroundImg: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
  registrationWrapper: {
    paddingLeft: 16,
    paddingRight: 16,
    width: "100%",
    height: 549,
    backgroundColor: "white",
    borderRadius: 25,
    position: "relative",
  },
  addImage: {
    position: "absolute",
    bottom: 489,
    left: "50%",
    transform: [{ translateX: -55 }],
  },
  title: {
    marginTop: 92,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 32,
    color: "#212121",
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    letterSpacing: 0.3,
  },
  textInput: {
    padding: 16,
    marginBottom: 16,
    height: 50,
    width: "100%",

    color: "#212121",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    fontWeight: "400",

    borderWidth: 0.5,
    borderRadius: 8,
  },
  primaryBtn: {
    maxHeight: 51,
    marginTop: 27,
    marginBottom: 16,

    flex: 1,
    paddingTop: 16,
    paddingBottom: 16,
    flexDirection: "column",
    alignItems: "center",

    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  textPrimaryBtn: {
    color: "white",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
  },
  textSignIn: {
    marginLeft: "auto",
    marginRight: "auto",

    color: "#1B4371",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
  },
});

export default RegistrationScreen;
