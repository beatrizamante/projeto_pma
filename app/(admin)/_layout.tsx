import React from "react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Stack } from "expo-router";

export default function AdminLayout() {
  return (
    <ActionSheetProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="userList" options={{ headerShown: false }} />
        <Stack.Screen name="userManagement" options={{ headerShown: false }} />
      </Stack>
    </ActionSheetProvider>
  );
}
