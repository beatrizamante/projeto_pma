import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Footer from "../../components/Footer";

export default function UserHome() {
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
          <View className="flex w-max-[269px] w-full">
            <Text className="pt-6 text-darker font-semibold text-lg">
              If you can’t find a specific person’s hash, please, contact your
              administrative user. They’ll be the one to create one for you.{" "}
            </Text>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}
