import React from "react";
import { View, Text, ScrollView, FlatList, StyleSheet, SafeAreaView, Image,Button, Alert } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart,  removeToCart } from "../stores/reducers/products";


export default function ProductListScene(){ 
  const cart = useSelector(state=>state.carts.cartitems)
  const dispatch = useDispatch()
  console.log("///////////////")
  console.log(cart)
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View>
      <Text>장바구니 리스트</Text>
        <ScrollView>
          <FlatList 
            style={{margin:10}}
            data={cart}
            
            keyExtractor={(item) => item.itemid}
            
            renderItem={({item}) => {
                
            return(
            <View>
            <View style={{margin:1}}>
            {!!item.itemtitle && (
              <Text  style={{color:'#888'}}>{item.itemtitle}</Text>
            )}
            {!!item.itemprice && (
              <Text style={{ fontSize: 18}}>{item.itemprice}원 </Text>
            )}
            
            </View>
            </View>
            )
            }}
          />
          <Button title="계산하기"/>
          </ScrollView>
      </View>
    </SafeAreaView>
  )
}