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
import UserPhoto from "../components/UserPhoto";

const RegistrationScreen = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const [activeInput, setActiveInput] = useState("none");

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
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
                  styles.textInput,
                  activeInput === "login" && styles.textInputActive,
                ]}
                placeholder="Логін"
                onFocus={() => {
                  setActiveInput("login");
                }}
                onBlur={() => {
                  setActiveInput("none");
                }}
              />
              <TextInput
                style={[
                  styles.textInput,
                  activeInput === "email" && styles.textInputActive,
                ]}
                placeholder="Адреса електронної пошти"
                onFocus={() => {
                  setActiveInput("email");
                }}
                onBlur={() => {
                  setActiveInput("none");
                }}
              />
              <View style={styles.inputPasswordContainer}>
                <TextInput
                  style={[
                    styles.textInput,
                    activeInput === "password" && styles.textInputActive,
                  ]}
                  name="password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="newPassword"
                  secureTextEntry={passwordVisibility}
                  enablesReturnKeyAutomatically
                  placeholder="Пароль"
                  onFocus={() => {
                    setActiveInput("password");
                  }}
                  onBlur={() => {
                    setActiveInput("none");
                  }}
                />
                <Pressable
                  onPress={handlePasswordVisibility}
                  style={styles.showPasswordBtn}
                >
                  <Text style={styles.showPasswordBtnText}>
                    {passwordVisibility ? "Показати" : "Приховати"}
                  </Text>
                </Pressable>
              </View>
              <Pressable
                style={({ pressed }) => [
                  styles.primaryBtn,
                  pressed && styles.activePrimaryBtn,
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
    paddingHorizontal: 16,
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

    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 0.5,
    borderRadius: 8,
  },
  textInputActive: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FF6C00",
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
  textSignIn: {
    marginLeft: "auto",
    marginRight: "auto",

    fontSize: 16,
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
  },
});

export default RegistrationScreen;
