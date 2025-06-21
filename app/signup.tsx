import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Input from "../components/form/Input";
import Button from "../components/Button";
import { useRouter } from "expo-router";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleCreateAccount = () => {
    router.replace("/");
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
              label="username"
              value={username}
              handler={setUsername}
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
