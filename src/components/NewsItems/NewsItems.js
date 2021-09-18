import React, { Component } from 'react'

export class NewsItems extends Component
{

    render ()
    {
        const { title, description, url, urlToImage } = this.props
        return (
            <div className="card my-3" style={ { width: "18rem" } }>
                <img src={ !urlToImage ? "https://cdn.vox-cdn.com/thumbor/FDtx08cBTo92zrGuxfJXWWyufZQ=/0x37:2880x1545/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22859134/Screen_Shot_2021_09_17_at_4.33.29_PM.png" : urlToImage } style={ { height: "150px" } } className="card-img-top " alt="news Pic" />
                <div className="card-body">
                    <h5 className="card-title">{ title.slice( 0, 40 ) }...</h5>
                    <p className="card-text">{ description.slice( 0, 90 ) }... </p>
                    <a rel="noreferrer" href={ url } target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItems
