import { FlatList, View } from "react-native";
import React from "react";
import Item from "./Item";

type ListProps = {
  data: { id: number; name: string }[];
};

export default function List({ data }: ListProps) {
  return (
    <>
      <View className="h-[250px]">
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Item content={item.name} onPress={() => {}} />
          )}
          className="flex gap-y-4 p-4 bg-semilight"
        />
      </View>
    </>
  );
}
