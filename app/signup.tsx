import { View, Text, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Input from "../components/form/Input";
import Button from "../components/Button";
import { useRouter } from "expo-router";
import { store, UserSchema } from "../infrastructure/repository/UserRepository";

export default function SignUp() {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleCreateAccount = async () => {
    const parse = UserSchema.safeParse({
      name,
      email,
      password,
      role: "user",
    });

    if (!parse.success) {
      console.log(parse.error.format());
      Alert.alert("Validation Error", "Please check your inputs");
      return;
    }

    if (password === confirmPass) {
      try {
        await store(parse.data);
        console.log("User registered!");
        router.replace("/");
      } catch (error) {
        console.error("Database Error:", error);
        Alert.alert("Error", "Failed to register user.");
      }
    }
    Alert.alert(
      "Password error:",
      "The password must be the same as the confirmation pass"
    );
    return;
  };

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
            <Input
              label="name"
              value={name}
              handler={setname}
              isPassword={false}
            />
            <Input
              label="email"
              value={email}
              handler={setEmail}
              isPassword={false}
            />
            <Input
              label="password"
              value={password}
              handler={setPassword}
              isPassword={true}
            />
            <Input
              label="confirm password"
              value={confirmPass}
              handler={setConfirmPass}
              isPassword={true}
            />
            <Button content="Sign Up!" onPress={handleCreateAccount} />
          </View>
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}
