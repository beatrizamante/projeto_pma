import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  
  type ImageButtonProps = {
    onPress: () => void;
    testID?: string;
  };
  
  export default function LinkButton({
    onPress,
    testID
  }: ImageButtonProps) {
    return (
      <View>
        <TouchableOpacity onPress={onPress} style={styles.button} testID={testID}>
            <Text style={styles.text}>Link to GitHub</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    button: {
      justifyContent: "center",
      alignItems: "center",
      width: 90,
      height: 23,
      borderRadius: 45,
      borderColor: "#F6F1ED",
      borderWidth: 2
    },
    text: {
        fontSize: 12,
        color: "#F6F1ED"
    }
  })