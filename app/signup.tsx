import { View, ImageBackground, Text } from "react-native";
import React from "react";
import Footer from "../components/Footer";
import Input from "../components/form/Input";
import Button from "../components/Button";

export default function SignUp() {
  return (
    // <ImageBackground
    //   source={require("../assets/background.png")}
    //   resizeMode="repeat"
    //   className="flex justify-center items-center"
    // >
      <View className="flex-1 justify-between items-center px-6 pb-10">
        <View className="flex flex-col justify-center items-center gap-4">
          <Text className="text-darker text-center text-xl font-semibold">
            Enter information for sign up:
          </Text>
          <Input label="username" />
          <Input label="email" />
          <Input label="password" />
          <Input label="confirm password" />
          <Button content="Sign Up!" onPress={() => {}} />
        </View>
        <Footer />
      </View>
    // </ImageBackground>
  );
}
