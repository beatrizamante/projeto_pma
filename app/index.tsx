import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Footer from "../components/Footer";
import Input from "../components/form/Input";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 24,
          paddingBottom: 120,
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex flex-col justify-center items-center gap-4">
          <Input label="login" />
          <Input label="password" />
          <Button content="Join Our Reign!" onPress={() => {}} />
          <Text className="pt-6 text-darker font-semibold text-lg">
            Don’t have an account yet?{" "}
          </Text>
          <TouchableOpacity>
            <Text className="text-xl text-semidark font-semibold">
              Sign Up!{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}
