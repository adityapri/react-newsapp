import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex: "1"}}>
                        {source}
                        <span class="visually-hidden">unread messages</span>
                    </span>
                    <img src={imageUrl ? imageUrl : "https://img.etimg.com/thumb/msid-90929485,width-1070,height-580,imgsize-20444,overlay-etmarkets/photo.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        {/* <span class="badge rounded-pill bg-danger">{source}</span> */}
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p class="card-text"><small class="text-muted">By {author ? author : "anonymous"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
