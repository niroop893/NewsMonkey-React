import React, { Component } from 'react'

export class NewsItem extends Component {
  // eslint-disable-next-line
  
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div>
        <div className='my-3'>
        <div className="card">  
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"style={{left: "90%", zIndex: "1"}}>
        {source} </span>
            <img src={!imageUrl?"https://techcrunch.com/wp-content/uploads/2024/05/alphafold-3-deepmind.webp?resize=1536,864":imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title} </h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">Last updated {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
              <a rel="noreferrer" href={newsUrl} target="_blank" className='btn btn-sm btn-dark' >Read More</a>
            </div>
          </div>
          </div>
      </div>
    )
  }
}

export default NewsItem
