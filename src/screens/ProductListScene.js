import React from "react";
import { View, Text, ScrollView, FlatList, StyleSheet, SafeAreaView, Image,Button, Alert } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeToCart } from "../stores/reducers/products";
import {addProducts, checkOut } from "../stores/reducers/carts"


export default function ProductListScene(){ 
  const cart = useSelector(state=>state.carts)
  const product = useSelector(state=>state.products)
  const dispatch = useDispatch()
  
  console.log(cart)
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View>
          <FlatList 
            style={{margin:10}}
            data={product}
            
            keyExtractor={(item) => item.id}
            initialScrollIndex={5}
            renderItem={({item}) => {
                
            return(
            <View style={{margin:1}}>
            {!!item.title && (
              <Text style={{ fontSize: 18}} >{item.title}</Text>
            )}
            {item.coverImage && (
              <Image 
                style={{width: '100%', height: 200}}
                source={{uri:item.coverImage}} />
            )}
            {!!item.price && (
              <Text style={{color:'#888'}}>{item.price}원 </Text>
            )}
            
            <View> 
              {
                cart.cartscore < 0 //&& checked(item.id)
                ? <Button title="빼기" onPress={()=>{Alert.alert('빼기 성공');(dispatch(removeToCart({item})));}}
              >
                  </Button>
                : <Button title="담기" onPress={()=>{Alert.alert('담기 성공');(dispatch(addProducts(dispatch(addToCart(item)))));}}
              >
                  </Button>
              }

            </View>
            
            </View>
            )
            }}
          />
      </View>
    </SafeAreaView>
  )
}