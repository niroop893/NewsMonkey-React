import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  

   
    constructor(){
    super();
    console.log('Hello I am consturtor for News component')
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4794f702d849431a850f30be3b1dc729";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({articles: parsedData.articles})
  }
   handlePreviousClick= async()=>{
    console.log("Previous")
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4794f702d849431a850f30be3b1dc729&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })

  }

   handleNextClick= async()=>{
    console.log("Next")
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4794f702d849431a850f30be3b1dc729&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className='row'>
        {this.state.articles.map((element)=>{
        return <div className='col-md-4'key={element.url} >
        <NewsItem  title={element.title?element.title.slice(0,88):" "} description={element.description?element.description.slice(0,88):" "} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        })}
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
            </div>
      </div>
    )
  }
}

export default News
