import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import styles from "./LoginScreenCss";

const LoginScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-250}
      >
        <View style={styles.container}>
          <ImageBackground
            source={require("../../img/Photo_BG.jpg")}
            resizeMode="cover"
            style={styles.backgroundImg}
          >
            <View style={styles.registrationWrapper}>
              <Text style={styles.title}>Увійти</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Адреса електронної пошти"
              />
              <TextInput style={styles.textInput} placeholder="Пароль" />
              <Pressable style={styles.primaryBtn}>
                <Text style={styles.textPrimaryBtn}>Увійти</Text>
              </Pressable>
              <Text style={styles.textSignIn}>
                Немає акаунту?{" "}
                <Text style={{ textDecorationLine: "underline" }}>
                  Зареєструватися
                </Text>
              </Text>
            </View>
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
