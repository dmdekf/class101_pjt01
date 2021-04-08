import React from "react";
import { View, Text, ScrollView, FlatList, StyleSheet, SafeAreaView, Image,Button, Alert } from "react-native";
import { useSelector } from 'react-redux';
import { addToCart } from "../stores/actions/cart";

export default function ProductListScene(props){
  const product = useSelector(state=>state.products)
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
                <Button
        title="담기"
        onPress={()=>Alert.alert('담기 성공')}
      />
                </View>
                )
                }}
              />
          </View>
      </SafeAreaView>
  )
}