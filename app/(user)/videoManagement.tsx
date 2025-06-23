import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import {
  store,
  VideoSchema,
} from "../../infrastructure/repository/VideoRepository";
import { useAuth } from "../../stores/useAuth";
import VideoIcon from "../../components/videoIcon";

export default function VideoManagement() {
  const router = useRouter();
  const logInfo = useAuth();

  const handleCreate = async () => {
    const user_id = logInfo.user!.id;
    const image_path = "./bin";

    const parse = VideoSchema.safeParse({
      image_path,
      user_id,
    });

    if (!parse.success) {
      console.log(parse.error.format());
      Alert.alert("Validation Error", "Please check your inputs");
      return;
    }
    await store(parse.data);
    console.log("Criar nova pessoa:", { image_path });
    router.push("/(user)/videoList");
  };

  const handleBack = () => {
    router.back();
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
