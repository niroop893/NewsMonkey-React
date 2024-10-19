import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
    articles = [
      {
        "source": {
          "id": "bbc-sport",
          "name": "BBC Sport"
        },
        "author": null,
        "title": "Pakistan vs England LIVE: second Test, day four, Multan – cricket score, radio commentary and text updates",
        "description": "Pakistan host England in the second Test in Multan – follow text & score updates plus radio commentary.",
        "url": "http://www.bbc.co.uk/sport/cricket/live/c724dy35q8xt",
        "urlToImage": "https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png",
        "publishedAt": "2024-10-18T05:07:17.019932Z",
        "content": "Steven FinnFormer England fast bowler on BBC Test Match Special\r\nThe impressive thing is that not once have we heard an England player or coach moan about the situation they have found themselves in.… [+581 chars]"
      },
      {
        "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
      },
      {
        "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
      }
    ]
    constructor(){
    super();
    console.log('Hello I am consturtor for News component')
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className='row'>
        {this.state.articles.map((element)=>{
        return <div className='col-md-4'key={element.url} >
        <NewsItem  title={element.title.slice(0,88)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        })}
      
            </div>
      </div>
    )
  }
}

export default News
