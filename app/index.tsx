import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Footer from "../components/Footer";
import Input from "../components/form/Input";
import Button from "../components/Button";
import { useRouter } from "expo-router";
import { useAuth } from "../stores/useAuth";
import { role } from "../interfaces/user";

export default function Home() {
  const router = useRouter();
  const logInfo = useAuth((state) => state.login);

  const [login, onChangeLogin] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const [err, setErr] = React.useState("");

  const handleLogin = () => {
    if (login === "fulano" && password === "123") {
      setErr("");
      logInfo({
        username: login,
        role: "user",
      });
      router.replace("/(user)");
    } else if (login === "admin" && password === "123") {
      setErr("");
      logInfo({
        username: login,
        role: "admin",
      });
      router.replace("/(admin)");
    } else {
      setErr("Invalid Login.");
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
