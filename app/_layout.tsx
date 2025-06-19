import React from "react";
import "../global.css";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Stack } from "expo-router";
import NavBar from "../components/NavBar";

export default function Layout() {
  return (
    <ActionSheetProvider>
      <Stack
        screenOptions={{
          header: () => <NavBar />,
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="signup" options={{ title: "Register" }} />
      </Stack>
    </ActionSheetProvider>
  );
}
