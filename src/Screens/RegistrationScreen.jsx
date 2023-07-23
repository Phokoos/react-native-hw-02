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
import styles from "./RegistrationScreenCss";

const RegistrationScreen = () => {
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
              <TextInput style={styles.textInput} placeholder="Логін" />
              <TextInput
                style={styles.textInput}
                placeholder="Адреса електронної пошти"
              />
              <TextInput style={styles.textInput} placeholder="Пароль" />
              <Pressable style={styles.primaryBtn}>
                <Text style={styles.textPrimaryBtn}>Зареєстуватися</Text>
              </Pressable>
              <Text style={styles.textSignIn}>Вже є акаунт? Увійти</Text>
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

export default RegistrationScreen;
