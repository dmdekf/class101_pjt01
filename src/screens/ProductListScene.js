import React from "react";
import { View, Text, ScrollView, FlatList, StyleSheet, SafeAreaView, Image } from "react-native";
import { useSelector } from 'react-redux';

export default function ProductListScene(props){
  const products = useSelector(state=>state.products.availableProducts)
  return (
      <SafeAreaView>

          <View>
              <FlatList 
                style={{margin:10}}
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({index, item, separators}) => {
                    
                return(
                <View style={{margin:1}}>
                {!!item.title && (
                  <Text>{item.title}</Text>
                )}
                {item.coverImage && (
                  <Image 
                    style={{width: '100%', height: 200}}
                    source={{uri:item.coverImage}} />
                )}
                {!!item.price && (
                  <Text>{item.price}원 </Text>
                )}
                </View>
                )
                }}
              />
          </View>
      </SafeAreaView>
  )
}