import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ModalBase from "./ModalBase";

type ConfirmationModalProp = {
  onConfirm: () => void;
  onCancel: () => void;
  visible: boolean;
  content: string;
};

export default function ConfirmantionModal({
  content,
  visible,
  onConfirm,
  onCancel,
}: ConfirmationModalProp) {
  return (
    <ModalBase visible={visible} onClose={onCancel}>
      <View>
        <Text className="text-center text-darker font-semibold mb-4">
          Are you sure you want to delete this {content}?
        </Text>
        <View className="flex flex-row justify-around items-center w-full">
          <TouchableOpacity className="flex w-[140px]" onPress={onConfirm}>
            <Text className="text-xl text-darker font-semibold text-center">
              YES
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex w-[140px]" onPress={onCancel}>
            <Text className="text-xl text-darker font-semibold text-center">
              NO
            </Text>
          </TouchableOpacity>
        </View>
        <Text className="text-center text-darker font-semibold">
          Click outside to close this window.
        </Text>
      </View>
    </ModalBase>
  );
}
