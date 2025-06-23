import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

export default function UserHome() {
  const router = useRouter();

  const handlerNav = (id: string) => {
    if (id === "people") {
      router.replace("/peopleList");
    } else if (id === "video") {
      router.replace("/videoList");
    } else {
      console.log("Unknown:", id);
    }
  };
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
        <View className="flex flex-col justify-center items-center gap-4 h-full">
          <View className="flex flex-row justify-between items-start gap-4 w-full px-10">
            <Card
              title="Manage Videos"
              content="Create or manage existing videos"
              uri={require("../../assets/manage_videos.png")}
              id="video"
              onPress={handlerNav}
            />
            <Card
              title="Finding People"
              content="Look for the person you need to find"
              uri={require("../../assets/finding_people.png")}
              id="people"
              onPress={handlerNav}
            />
          </View>
          <View className="w-[200px] self-center mt-6">
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
