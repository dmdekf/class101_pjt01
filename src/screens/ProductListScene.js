import React from "react";
import { View, Text, ScrollView, FlatList, StyleSheet, SafeAreaView, Image,Button, Alert } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, userProducts, removeToCart } from "../stores/reducers/products";


export default function ProductListScene(){ 
  const cart = useSelector(state=>state.carts)
  const product = useSelector(state=>state.products)
  const dispatch = useDispatch()
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View>
          <FlatList 
            style={{margin:10}}
            data={product}
            
            keyExtractor={(item) => item.id}
            
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
                cart.cartscore > 0 && cart.cartitems.id.filter(item.id)
                ? <Button title="빼기" onPress={()=>{Alert.alert('빼기 성공');(dispatch(removeToCart({item})));}}
              >
                  </Button>
                : <Button title="담기" onPress={()=>{Alert.alert('담기 성공');(dispatch(addToCart(item)));}}
              >
                  </Button>
              }

            </View>
            {/* <Button
              title="담기"
              onPress={()=>{Alert.alert('담기 성공');
               (dispatch(addToCart(item)));
               (item.score -=1)
                }}
              
            /> */}
            </View>
            )
            }}
          />
      </View>
    </SafeAreaView>
  )
}