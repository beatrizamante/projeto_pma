import { FlatList, View } from "react-native";
import React from "react";
import ItemDelete from "./item/ItemDelete";

type ListProps = {
  data: any[];
  handleDelete: (id: string) => void;
};

export default function ListDelete({ data, handleDelete }: ListProps) {
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
        nestedScrollEnabled={true}
        className="flex gap-y-4 p-4 bg-semilight"
      />
    </View>
  );
}
