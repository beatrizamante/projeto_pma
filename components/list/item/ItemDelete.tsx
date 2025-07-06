import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "./Icon";

type ItemProps = {
  id: string;
  content: string;
  onPress: (id: string) => void;
};

export default function ItemDelete({ content, id, onPress }: ItemProps) {
  return (
    <View className="w-[300px] h-[60px] border border-semidark rounded-[25px] bg-semilight shadow-black shadow-lg flex flex-row items-center justify-between px-6 mb-4">
      <Text className="text-darker font-semibold text-xl">{content}</Text>
      <TouchableOpacity onPress={() => onPress(id)}>
        <Icon onPress={() => {}} />
      </TouchableOpacity>
    </View>
  );
}
