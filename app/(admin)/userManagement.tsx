import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

export default function userManagement() {
  const router = useRouter();

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
            <Text className="text-darker text-center font-semibold">
              Editing {"loged_user"}
            </Text>

            <Button content="Sign Up!" onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}
