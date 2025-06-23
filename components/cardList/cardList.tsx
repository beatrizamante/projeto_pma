import { FlatList, useWindowDimensions, View } from "react-native";
import React from "react";
import Card from "./item/item";
import { useDoubleClickNavigation } from "../../app/hooks/useDoubleClickNavigation";

type ListProps = {
  data: {
    id: number;
    user: string;
    date: string;
    image_path: string;
  }[];
  navigateTo: string;
};

export default function CardList({ data, navigateTo }: ListProps) {
  const { width } = useWindowDimensions();
  const handlePress = useDoubleClickNavigation(navigateTo);
  const numColumns = width > 800 ? 3 : 2;

  return (
    <View className="flex h-[350px] w-full">
      <FlatList
        data={data}
        key={numColumns}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            id={item.id.toString()}
            onPress={handlePress}
            date={item.date}
            user={item.user}
            image_path={require("../../assets/manage_people.png")}
          />
        )}
        className="flex flex-wrap gap-y-4 p-4 bg-semilight"
        numColumns={numColumns}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 16,
        }}
        contentContainerStyle={{
          padding: 16,
        }}
      />
    </View>
  );
}
