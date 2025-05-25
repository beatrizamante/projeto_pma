import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function NavBar() {

  return (
    <View className="h-[86px], min-w-full justify-between">
      <View>
        <Image
          source={require("../assets/icon.png")}
          style={style.icon}
        ></Image>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 70,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#30415D",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  text_header: {
    fontSize: 12,
    color: "#FFFFFF",
    textAlign: "right",
  },
});
