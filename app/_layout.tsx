import React from "react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <ActionSheetProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerTitle: "Login", headerShown: false }}
        />
        <Stack.Screen
          name="Listagem"
          options={{
            headerTitle: "Listagem",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Sobre"
          options={{
          }}
        />
      </Stack>
    </ActionSheetProvider>
  );
}
