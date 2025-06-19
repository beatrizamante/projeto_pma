import React from "react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Stack } from "expo-router";

export default function AdminLayout() {
  return (
    <ActionSheetProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Admin Home" }} />
      </Stack>
    </ActionSheetProvider>
  );
}
