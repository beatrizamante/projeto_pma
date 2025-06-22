import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import ModalBase from "./ModalBase";

type ModalBaseProps = {
  visible: boolean;
  onClose: () => void;
  onFind: () => void;
  onDelete: () => void;
};

export default function ActionModal({
  visible,
  onClose,
  onFind,
  onDelete,
}: ModalBaseProps) {
  return (
    <ModalBase visible={visible} onClose={onClose}>
      <View>
        <Text className="text-darker font-semibold text-lg text-center mb-4">
          Do you want to:
        </Text>
        <View className="flex flex-row justify-between items-center mb-4">
          <TouchableOpacity
            onPress={onFind}
            className="flex flex-col items-center gap-2 px-4"
          >
            <Text className="text-darker font-semibold text-center">
              Find a person
            </Text>
            <Ionicons
              name="eye"
              size={64}
              color="black"
              style={{ alignSelf: "center" }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onDelete}
            className="flex flex-col items-center gap-2 px-4"
          >
            <Text className="text-darker font-semibold text-center">
              Delete
            </Text>
            <Ionicons name="trash" size={64} color="black" />
          </TouchableOpacity>
        </View>
        <Text className="text-center text-darker font-semibold">
          Click outside to close this window.
        </Text>
      </View>
    </ModalBase>
  );
}
