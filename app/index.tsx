import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import React from "react";
import Footer from "../components/Footer";
import Input from "../components/form/Input";
import Button from "../components/Button";
import { useRouter } from "expo-router";
import { useAuth } from "../stores/useAuth";
import { findByUsername } from "../infrastructure/repository/UserRepository";
import { User } from "./interfaces/user";

export default function Home() {
  const router = useRouter();
  const logInfo = useAuth((state) => state.login);

  const [login, onChangeLogin] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const [err, setErr] = React.useState("");

  const handleLogin = async () => {
    const user: User | null = await findByUsername(login);

    if (!user) {
      Alert.alert("This username does not exist, please, create an account;");
      return;
    }

    if (password === user.password) {
      setErr("");
      logInfo({
        id: user.id,
        username: user.username,
        role: user.role,
      });
    } else {
      Alert.alert("Invalid login, please, check your password");
    }

    if (user.role === "user") {
      setErr("");
      router.replace("/(user)");
    } else {
      setErr("");
      router.replace("/(admin)");
    }
  };

  const handleGoToSignUp = () => {
    router.push("/signup");
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
        <View className="flex flex-col justify-center items-center gap-4">
          <Input
            label="login"
            value={login}
            handler={onChangeLogin}
            isPassword={false}
          />
          <Input
            label="password"
            value={password}
            handler={onChangePassword}
            isPassword={true}
          />
          <Button content="Join Our Reign!" onPress={handleLogin} />
          <Text className="pt-6 text-darker font-semibold text-lg">
            Don’t have an account yet?{" "}
          </Text>
          <TouchableOpacity onPress={handleGoToSignUp}>
            <Text className="text-xl text-semidark font-semibold">
              Sign Up!
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}
