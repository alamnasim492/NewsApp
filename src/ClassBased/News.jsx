import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "./mystyle.css";
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articals: [],
    };
  }
  async getArticals() {
    var rawdata = await fetch(
      `https://newsapi.org/v2/everything?q=${this.props.category}&sortBy=publishedAt&language=hi&apiKey=7afaaf849d014982836e76b9d8fca30c`
    );
    var data = await rawdata.json();
    console.log(data);
    this.setState({ articals: data.articles });
  }
  componentDidMount() {
    this.getArticals();
  }
  componentDidUpdate(old){
    if(old.category!==this.props.category){
    this.getArticals()
  }
}
  render() {
    return (
      <>
        <h1 className="background text-light mt-1 text-center mb-2 p-1 fs-2">News Articals</h1>
        <div className="container-fluid">
          <div className="row">
            {this.state.articals.map((item, index) => {
              return <NewsItem 
              title={item.title}
              author={item.author}
              date={item.publishedAt}
              description={item.description}
              image={item.urlToImage}
              url={item.url}
              key={index}

              />;
            })}
          </div>
        </div>
      </>
    );
  }
}
