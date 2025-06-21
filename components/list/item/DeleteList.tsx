import { FlatList, View } from "react-native";
import React from "react";
import ItemDelete from "./ItemDelete";

type ListProps = {
  data: { id: number; name: string }[];
};

export default function ListDelete({ data }: ListProps) {
  const handleDelete = () => {};

  return (
    <View className="h-[250px]">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ItemDelete
            content={item.name}
            id={item.id.toString()}
            onPress={handleDelete}
          />
        )}
        className="flex gap-y-4 p-4 bg-semilight"
      />
    </View>
  );
}
