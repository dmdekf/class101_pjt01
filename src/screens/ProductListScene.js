import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class ProductListScene extends React.Component {
  render() {
    return (
      
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

        <TouchableOpacity>
          <Text style={{ fontSize: 30, color: "green" }}>상품 목록들 리스트</Text>
        </TouchableOpacity>
      </View>
    );
  }
}