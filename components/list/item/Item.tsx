import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

type ItemProps = {
  content: string;
  id: string;
  onPress: (id: string) => void;
};

export default function Item({ content, id, onPress }: ItemProps) {
  return (
    <TouchableOpacity id={id} onPress={() => onPress(id)} className="pb-4">
      <View className="w-[300px] h-[60px] border border-semidark rounded-[25px] bg-semilight shadow-black shadow-lg flex justify-center items-center">
        <Text className="text-darker font-semibold text-xl text-center">
          {content}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
