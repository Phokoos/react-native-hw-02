const { useNavigation } = require("@react-navigation/native");
const { Pressable, Image } = require("react-native");

const ArrowBack = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={{
        paddingLeft: 16,
        paddingTop: 7,
      }}
      onPress={() => navigation.navigate("PostsScreen")}
    >
      <Image
        source={require("../../img/svgIcons/arrowLeft.png")}
        style={{
          height: 24,
          width: 24,
        }}
      />
    </Pressable>
  );
};

export default ArrowBack;
