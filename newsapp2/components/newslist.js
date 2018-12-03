import React,{Component} from 'react';
import {View} from "react-native";
import NewsItem from "./newsItem"; 

export default class NewsList extends Component{
  render(){
     const { news } =this.props;
     const newsList =news.map( (newsItemData,i)=>
     (<NewsItem key={i} item={newsItemData}/>)
     ); 
      return <View style={{backgroundColor:"green"}}>{newsList}</View>;
  }


} 