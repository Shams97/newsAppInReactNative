import React, { Component } from "react";
import { Constants } from "expo";
import { View } from "react-native";
import Header from "./components/Header";
import SearchBox from "./components/searchBox";
import NewsList from "./components/newslist";


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            new: []
        };
    }
    componentDidMount() {
        this.search("iraq")
    }
    search(q) {
        fetch(`https://newsapi.org/v2/everything?q=bitcoin&from=2018-11-03&sortBy=publishedAt&apiKey=API_KEY`)
            .then(res => res.json()).then(news => {
                this.setState({ news: news.articles });
            }).catch((err) => { console.log(err) }
            );
    }
    updateParent(data) { this.setState(data) }

    render() {

        return (<View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
            <Header />
            <SearchBox searchFun={this.search.bind(this)} />
            <NewsList news={this.state.news}/>
        </View>);
    }

} 