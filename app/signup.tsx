import { View, Text, ScrollView } from "react-native";
import React from "react";
import Footer from "../components/Footer";
import Input from "../components/form/Input";
import Button from "../components/Button";

export default function SignUp() {
  return (
    <>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 24,
          paddingBottom: 160,
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 justify-between items-center px-6">
          <View className="flex flex-col justify-center items-center gap-4 mb-2">
            <Text className="text-darker text-center text-xl font-semibold">
              Enter information for sign up:
            </Text>
            <Input label="username" />
            <Input label="email" />
            <Input label="password" />
            <Input label="confirm password" />
            <Button content="Sign Up!" onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}
