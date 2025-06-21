import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import data from "../../mocks/videos";
import CardList from "../../components/cardList/cardList";

export default function videoList() {
  const router = useRouter();

  const createHandler = () => {
    router.replace("/videoManagement");
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
      >
        <View className="flex-1 justify-between items-center px-6">
          <View className="flex flex-col justify-center items-center gap-4 mb-2">
            <Text className="text-darker text-center text-lg font-semibold">
              Select a video to manage:
            </Text>
            <CardList data={data} navigateTo="/(user)/videoManagement" />
            <Button content="Create new video!" onPress={createHandler} />
          </View>
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}
