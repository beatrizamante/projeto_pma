import React from "react";
import '../global.css';
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Stack } from "expo-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <ActionSheetProvider>
      <Stack screenOptions={{
        header: () => <NavBar/>
      }}>

        <Stack.Screen name="index" options={{ title: 'Home' }} />
      </Stack>
    </ActionSheetProvider>
  );
}
