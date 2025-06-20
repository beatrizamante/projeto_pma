import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Input from "../../components/form/Input";
import { useAuth } from "../../stores/useAuth";

export default function userManagement() {
  const logInfo = useAuth();
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
            <View className="flex flex-row justify-between items-center w-full px-7">
              <TouchableOpacity className="flex w-[140px]">
                <Text className="text-lg text-darker font-semibold text-center">
                  Back
                </Text>
              </TouchableOpacity>
              <Text className="text-darker text-center font-semibold">
                Editing {"loged_user"}
              </Text>
            </View>
            <Input label="username" value={""} handler={(text: string) => {}} />
            <Input label="email" value={""} handler={(text: string) => {}} />
            <Input label="password" value={""} handler={(text: string) => {}} />
            <Input label="role" value={""} handler={(text: string) => {}} />
            <View>
              <Button content="Update user" onPress={() => {}} />
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}
