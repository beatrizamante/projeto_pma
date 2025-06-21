import React from "react";
import { Modal, TouchableWithoutFeedback, View } from "react-native";

type ModalBaseProps = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function ModalBase({
  visible,
  onClose,
  children,
}: ModalBaseProps) {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 bg-black/50 justify-center items-center">
          <TouchableWithoutFeedback>
            <View className="bg-semilight rounded-[25px] p-6 shadow-black shadow-lg">
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
