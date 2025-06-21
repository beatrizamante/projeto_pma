import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

export default function AdminHome() {
  const router = useRouter();

  const handlerNav = (id: string) => {
    if (id === "users") {
      router.replace("/userList");
    } else if (id === "people") {
      router.replace("/peopleList");
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
        <View className="flex flex-col justify-center items-center gap-4">
          <View className="flex flex-row justify-between items-start gap-4 w-full px-10">
            <Card
              id="users"
              title="Manage Users"
              content="Create or manage existing users"
              uri={require("../../assets/manage_users.png")}
              onPress={handlerNav}
            ></Card>
            <View className="flex justify-center items-center gap-2">
              <Card
                id="people"
                title="Manage People"
                content="Create or manage a body hash"
                uri={require("../../assets/manage_people.png")}
                onPress={handlerNav}
              ></Card>
              <TouchableOpacity className="flex w-[140px]">
                <Text className="text-lg text-darker font-semibold text-center">
                  How to create hashes_
                </Text>
                <Text className="text-lg text-darker font-semibold text-center">
                  Click Here
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="w-[200px] self-center mt-6 gap-2">
            <Text className="pt-6 text-darker font-semibold text-lg text-center">
              Need to use a real time video stream? No fret, please, access the
              documentation below and see how to connect across websocket
              connections
            </Text>
            <TouchableOpacity onPress={() => {}}>
              <Text className="text-xl text-semidark font-semibold text-center">
                Getting Started
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}
