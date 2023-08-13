import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

const CommentsScreen = () => {
  const [comment, setComment] = useState("");
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-280}
      >
        <View style={styles.container}>
          <Image
            source={require("../../img/userPortfolio/2_photo.png")}
            style={styles.photo}
          />
          <View style={styles.commentatorStyle}>
            <Image
              source={require("../../img/comments/commentator.png")}
              style={styles.commentatorImage}
            />
            <View style={styles.commentatorCommentContainer}>
              <Text style={styles.commentatorText}>
                Really love your most recent photo. I’ve been trying to capture
                the same thing for a few months and would love some tips!
              </Text>
              <Text style={styles.commentatorDate}>
                09 червня, 2020 | 08:40
              </Text>
            </View>
          </View>
          <View style={styles.commentatorStyle}>
            <View style={styles.commentatorCommentContainer}>
              <Text style={styles.commentatorText}>
                A fast 50mm like f1.8 would help with the bokeh. I’ve been using
                primes as they tend to get a bit sharper images.
              </Text>
              <Text style={styles.userDate}>09 червня, 2020 | 09:14</Text>
            </View>
            <Image
              source={require("../../img/comments/user.png")}
              style={styles.commentatorImage}
            />
          </View>
          <View style={styles.commentatorStyle}>
            <Image
              source={require("../../img/comments/commentator.png")}
              style={styles.commentatorImage}
            />
            <View style={styles.commentatorCommentContainer}>
              <Text style={styles.commentatorText}>
                Thank you! That was very helpful!
              </Text>
              <Text style={styles.commentatorDate}>
                09 червня, 2020 | 09:20
              </Text>
            </View>
          </View>
          <View style={styles.inputCommentContainer}>
            <TextInput
              style={styles.inputComment}
              placeholder="Коментувати..."
              value={comment}
              onChangeText={setComment}
            />
            <Pressable style={styles.sendButton}>
              <AntDesign
                name="arrowup"
                size={14}
                style={styles.sendButtonIcon}
              />
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: "100%",
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  photo: {
    width: "100%",
    marginBottom: 34,
    borderRadius: 8,
  },
  commentatorStyle: {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    gap: 32,
  },
  commentatorImage: {},
  commentatorCommentContainer: {
    padding: 16,
    marginBottom: 24,
  },
  commentatorText: {
    width: 267,
    marginBottom: 8,

    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    lineHeight: 18,
  },
  commentatorDate: {
    color: "#bdbdbd",
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    textAlign: "right",
  },
  userDate: {
    color: "#bdbdbd",
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    textAlign: "left",
  },
  inputCommentContainer: {
    position: "relative",
    height: 50,
  },
  inputComment: {
    height: "100%",
    padding: 16,

    borderRadius: 50,
    backgroundColor: "#E8E8E8",
  },
  sendButton: {
    width: 24,
    height: 24,
    position: "absolute",
    right: 8,
    top: 13,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#FF6C00",
    borderRadius: 50,
  },
  sendButtonIcon: {
    color: "white",
    // height: 8,
  },
});

export default CommentsScreen;
