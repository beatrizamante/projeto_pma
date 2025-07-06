import { View, Text } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";

type DropdownProps = {
  label: string;
  value: "user" | "admin";
  handler: (value: "user" | "admin") => void;
};

export default function DropDown({ label, value, handler }: DropdownProps) {
  return (
    <View className="w-[350px] h-[70px] border border-semidark rounded-[25px] bg-semilight shadow-black shadow-lg px-4 pt-3">
      <Text className="absolute top-1 left-4 text-lg font-semibold text-semidark px-1">
        {label}
      </Text>
      <Picker
        selectedValue={value}
        onValueChange={(itemValue) => handler(itemValue as "user" | "admin")}
        style={{ height: 50 }}
      >
        <Picker.Item label="User" value="user" />
        <Picker.Item label="Admin" value="admin" />
      </Picker>
    </View>
  );
}
