import React from "react";
import { View, Text, ScrollView, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { useSelector } from 'react-redux';

export default class ProductListScene extends React.Component {
  render() {
    function product() {
      const products = useSelector((state) => state.ProductListApp.availableProducts)
      return (products)
      
    }
  console.log(products)
  return (
      <SafeAreaView>
        <Text style={{ fontSize: 30, color: "black" }}>상품 리스트</Text>

        <View style={styles.card}>
            {/* <ScrollView> */}

              <FlatList 
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({itemData}) => {
                  return <Text>{itemData.item.title}</Text>}}
                />
            {/* </ScrollView> */}
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  }

})