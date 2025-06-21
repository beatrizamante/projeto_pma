import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import VideoIcon from "../../components/VideoIcon";

export default function VideoManagement() {
  const router = useRouter();

  const handleCreate = () => {
    console.log("Criar novo vídeo.");
    router.replace("/(user)/videoList");
  };

  const handleBack = () => {
    router.replace("/(user)");
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
        <View className="flex flex-col justify-center items-center gap-4 mb-2">
          <View className="flex flex-row justify-between items-center w-full px-7">
            <TouchableOpacity className="flex w-[140px]" onPress={handleBack}>
              <Text className="text-lg text-darker font-semibold text-center">
                Back
              </Text>
            </TouchableOpacity>
          </View>
          <VideoIcon thumbnail={require("../../assets/bigvid.png")} />
          <Button content="Upload video" onPress={handleCreate} />
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}
