import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import List from "../../components/list/item/List";
import data from "../../mocks/names";
import { useSelectedUser } from "../../stores/useSelectedUser";

export default function userList() {
  const { storeUser } = useSelectedUser();
  const router = useRouter();
  const [clicks, useClicks] = useState[0];

  const handleUserClick = (id: string) => {
    if (clicks === 2) {
      storeUser(id);
      router.push("/(admin)/userManagement");
    }
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
              Double click an user to edit:
            </Text>
            <List data={data} />
            <Button content="Create new user!" onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}
