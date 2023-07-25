import { useState } from "react";
import {
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
import UserPhoto from "./userPhoto";

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

  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [showPasswordText, setShowPasswordText] = useState("Показати");

  const handlePasswordVisibility = () => {
    if (showPasswordText === "Показати") {
      setShowPasswordText("Приховати");
      setPasswordVisibility(!passwordVisibility);
    } else {
      setShowPasswordText("Показати");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-184}
      >
        <View style={styles.container}>
          <ImageBackground
            source={require("../../img/Photo_BG.jpg")}
            resizeMode="cover"
            style={styles.backgroundImg}
          >
            <View style={styles.registrationWrapper}>
              <UserPhoto />
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
              <View style={styles.inputPasswordContainer}>
                <TextInput
                  style={[
                    {
                      backgroundColor: inputBackgroundColorPassword,
                      borderColor: inputBorderColorPassword,
                      paddingRight: 110,
                    },
                    styles.textInput,
                  ]}
                  name="password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="newPassword"
                  secureTextEntry={passwordVisibility}
                  enablesReturnKeyAutomatically
                  placeholder="Пароль"
                  onFocus={() => {
                    setInputBackgroundColorPassword("#FFFFFF");
                    setInputBorderColorPassword("#FF6C00");
                  }}
                  onBlur={() => {
                    setInputBackgroundColorPassword("#F6F6F6");
                    setInputBorderColorPassword("#E8E8E8");
                  }}
                />
                <Pressable
                  onPress={handlePasswordVisibility}
                  style={styles.showPasswordBtn}
                >
                  <Text style={styles.showPasswordBtnText}>
                    {showPasswordText}
                  </Text>
                </Pressable>
              </View>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "#E8470C" : "#FF6C00",
                    shadowColor: pressed ? "#3B1703" : "none",
                    shadowOffset: pressed ? { height: 6 } : { height: 0 },
                    shadowOpacity: pressed ? 0.4 : 0,
                    shadowRadius: pressed ? 2 : 0,
                  },
                  styles.primaryBtn,
                ]}
              >
                <Text style={styles.textPrimaryBtn}>Зареєстуватися</Text>
              </Pressable>
              <Pressable>
                {({ pressed }) => (
                  <Text
                    style={[
                      {
                        color: pressed ? "#FF6C00" : "#1B4371",
                      },
                      styles.textSignIn,
                    ]}
                  >
                    Вже є акаунт? Увійти
                  </Text>
                )}
              </Pressable>
            </View>
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  inputPasswordContainer: {
    height: 50,
    position: "relative",
  },
  showPasswordBtn: {
    position: "absolute",
    right: 16,
    top: 16,
  },
  showPasswordBtnText: {
    color: "#1B4371",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
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
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
    position: "relative",
  },
  photoCard: {
    width: 120,
    height: 120,
    position: "absolute",
    bottom: 489,
    left: "50%",
    transform: [{ translateX: -50 }],

    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  plusIcon: {
    position: "absolute",
    right: -13,
    bottom: 20,
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

    fontSize: 16,
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
  },
});

export default RegistrationScreen;
