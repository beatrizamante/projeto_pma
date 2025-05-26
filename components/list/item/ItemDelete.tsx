import { View, Text, Image } from "react-native";
import React from "react";
import Icon from "./Icon";

type ItemProps = {
  content: string;
};

export default function ItemDelete({ content }: ItemProps) {
  return (
    <View className="w-[300px] h-[60px] border border-semidark rounded-[25px] bg-semilight shadow-black shadow-lg flex flex-row justify-center items-center gap-4">
      <Text className="text-darker font-semibold text-xl text-center pr-4">{content}</Text>
      <Icon onPress={() => {}}/>
    </View>
  );
}
