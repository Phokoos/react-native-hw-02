import { StyleSheet } from "react-native";

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
    height: 489,
    backgroundColor: "white",
    borderRadius: 25,
  },
  title: {
    marginTop: 32,
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

    color: "#BDBDBD",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    fontWeight: "400",

    backgroundColor: "#F6F6F6",

    borderWidth: 0.5,
    borderColor: "#E8E8E8",
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

export default styles;
