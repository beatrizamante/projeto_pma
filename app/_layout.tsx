import React from "react";
import '../global.css';
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <ActionSheetProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerTitle: "", headerShown: false }}
        />
        <Stack.Screen
          name=""
          options={{
            headerTitle: "",
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
