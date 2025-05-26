import { View, ImageBackground, Text } from "react-native";
import React from "react";
import Footer from "../components/Footer";
import Input from "../components/form/Input";
import Button from "../components/Button";

export default function SignUp() {
  return (
    <ImageBackground
      source={require("../assets/background.png")}
      resizeMode="repeat"
      className="flex-1 flex-col justify-center items-center h-full w-full bg-semilight"
    >
      <View className="flex-1 justify-center items-center mt-10 h-full">
        <View className="flex flex-col justify-center items-center space-y-6">
          <Text className="text-darker text-center text-xl mb-6 font-semibold">
            Enter information for sign up:
          </Text>
          <Input label="username" />
          <Input label="email" />
          <Input label="password" />
          <Input label="confirm password" />
          <Button content="Sign Up!" onPress={() => {}} />
        </View>
      </View>
      <Footer />
    </ImageBackground>
  );
}
