import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

export default function AdminHome() {
  const router = useRouter();

  const handlerNav = (id: string) => {
    if (id === "users") {
      router.push("/userList");
    } else if (id === "people") {
      router.push("/peopleList");
    } else {
      console.log("Unknown:", id);
    }
  };

  return (
    <>
      <View className="flex flex-1 flex-col justify-center items-center gap-4 min-h-full">
        <View className="flex flex-1 flex-row justify-around items-center gap-4 w-full">
          <Card
            id="users"
            title="Manage Users"
            content="Create or manage existing users"
            uri={require("../../assets/manage_users.png")}
            onPress={handlerNav}
          ></Card>
          <Card
            id="people"
            title="Manage People"
            content="Create or manage a body hash"
            uri={require("../../assets/manage_people.png")}
            onPress={handlerNav}
          ></Card>
        </View>
        <TouchableOpacity
          className="w-[140px]"
          onPress={() => console.log("How to create hashes pressed")}
        >
          <Text className="text-lg text-darker font-semibold text-center">
            How to create hashes_
          </Text>
        </TouchableOpacity>
        <View className="self-center mt-6 px-6 max-w-[320px]">
          <Text className="pt-6 text-darker font-semibold text-lg text-center">
            Need to use a real time video stream? No fret, please, access the
            documentation below and see how to connect across websocket
            connections
          </Text>
          <TouchableOpacity className="pb-16" onPress={() => {}}>
            <Text className="text-xl text-semidark font-semibold text-center">
              Getting Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </>
  );
}
