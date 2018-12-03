import React, { Component } from "react";
import { View, Text,Image,StyleSheet } from "react-native";

export default class NewsItem extends Component {
  render (){
      let {item} =this.props;
      const {description,publishedAt,title,urlToImage} =item;
      return (
          <View style={style.itemNewsContainer}>
          <Image 
          style={style.image}
          resizeMode="cover"
          source={{url:urlToImage }}
          />
          <View>
              <Text style={StyleSheet.title}>{title}</Text>
              <Text style={StyleSheet.title}>{description}</Text>
              <Text style={StyleSheet.title}>{publishedAt}</Text>

          </View>
          </View>
      );
  }
}

const style =StyleSheet.create({
    itemNewsContainer:{
        height:60,
        flexDirection:"row",
        alignItem:"center",
        backgroundColor:"#d8f4ff"
    },
    image:{height:40, width:95},
    title:{marginLeft:20}
});