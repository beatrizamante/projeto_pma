import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Footer from "../../components/Footer";

export default function AdminHome() {
  const router = useRouter();

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 24,
          paddingBottom: 120,
          flexGrow: 1,
        }}
      >
        <View className="flex flex-col justify-center items-center gap-4">
          <Text className="pt-6 text-darker font-semibold text-lg">
            Don’t have an account yet?{" "}
          </Text>
          <TouchableOpacity onPress={() => {}}>
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
