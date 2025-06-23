import { FlatList, View } from "react-native";
import React from "react";
import Item from "./Item";
import { useDoubleClickNavigation } from "../../../app/hooks/useDoubleClickNavigation";

type ListProps = {
  data: { id: number; name: string }[];
  navigateTo: string;
};

export default function List({ data, navigateTo }: ListProps) {
  const handlePress = useDoubleClickNavigation(navigateTo);
  return (
    <View className="h-[250px]">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Item
            id={item.id.toString()}
            content={item.name}
            onPress={handlePress}
          />
        )}
        nestedScrollEnabled={true}
        className="flex gap-y-4 p-4 bg-semilight"
      />
    </View>
  );
}
