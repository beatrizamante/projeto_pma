import {
  View,
  Text,
  SectionList,
  SafeAreaView,
} from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Item from "./Item";

type ListProps = {
  data: any;
}

export default function List({ data }: ListProps) {
  const DATA = data;
  return (
    <SafeAreaProvider>
      <SafeAreaView >
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({ item }) => (
            <Item content={item.name}/>
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
