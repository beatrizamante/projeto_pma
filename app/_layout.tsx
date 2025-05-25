import React from "react";
import '../global.css';
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <ActionSheetProvider>
      <Stack>
        <Stack.Screen name="index"/>
      </Stack>
    </ActionSheetProvider>
  );
}
