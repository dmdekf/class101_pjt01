import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class HomeScene extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'white'}}>
        <Text style={{ fontSize: 30, color: "black" }}>Class101_Project</Text>

        <TouchableOpacity>
          <Text style={{ fontSize: 30, color: "black" }}>상품 목록 가기!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
