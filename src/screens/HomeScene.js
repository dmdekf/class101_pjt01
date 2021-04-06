import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class HomeScene extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30, color: "red" }}>class101 Home</Text>

        <TouchableOpacity>
          <Text style={{ fontSize: 30, color: "green" }}>상품 목록 가기!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
