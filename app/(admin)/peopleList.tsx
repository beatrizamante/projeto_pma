import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Footer from "../../components/Footer";
import data from "../../mocks/names";
import Button from "../../components/Button";
import { useRouter } from "expo-router";
import ListDelete from "../../components/list/item/DeleteList";

export default function peopleList() {
  const router = useRouter();

  const createHandler = () => {
    router.push("/peopleManagement");
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
              Click on the icon to delete:
            </Text>
            <ListDelete data={data} />
            <Button content="Create new person!" onPress={createHandler} />
          </View>
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}
