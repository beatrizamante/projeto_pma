import { View, Text, ScrollView } from "react-native";
import React from "react";
import Footer from "../../components/Footer";
import List from "../../components/list/item/List";
import data from "../../mocks/names";

export default function peopleList() {
  return (
    <>
      <ScrollView
        nestedScrollEnabled={true}
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
              Select an user to find:
            </Text>
            <List data={data} navigateTo="/(user)/findPeople" />
            <Text className="text-darker text-center text-lg font-semibold">
              Can’t find who you’re looking for? Contact you admin to add them!
            </Text>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}
