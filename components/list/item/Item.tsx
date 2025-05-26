import { View, Text } from "react-native";
import React from "react";

type ItemProps = {
  content: string;
};

export default function Item({ content }: ItemProps) {
  return (
    <View className="w-[300px] h-[60px] border border-semidark rounded-[25px] bg-semilight shadow-black shadow-lg flex justify-center items-center">
      <Text className="text-darker font-semibold text-xl text-center">{content}</Text>
    </View>
  );
}
