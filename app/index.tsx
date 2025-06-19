import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Footer from "../components/Footer";
import Input from "../components/form/Input";
import Button from "../components/Button";

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center mt-10 h-full">
      <View className="flex flex-col justify-center items-center gap-4">
        <Input label="login" />
        <Input label="password" />
        <Button content="Join Our Reign!" onPress={() => {}} />
        <Text className="pt-6 text-darker font-semibold text-lg">
          Don’t have an account yet?{" "}
        </Text>
        <TouchableOpacity>
          <Text className="text-xl text-semidark font-semibold">Sign Up! </Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
}
