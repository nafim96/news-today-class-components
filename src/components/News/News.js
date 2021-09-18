import React, { Component } from 'react'
import NewsItems from '../NewsItems/NewsItems'

export class News extends Component
{
    constructor ()
    {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        };
    }
    async componentDidMount ()
    {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ea54278051f84078a47ef170118fd2dc&page=1&pageSize=20`;
        const data = await fetch( url );
        const parsed = await data.json();
        this.setState( { articles: parsed.articles } )

    }

    handlePrev = async () =>
    {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ea54278051f84078a47ef170118fd2dc&page=${ this.state.page - 1 }&pageSize=20`;
        const data = await fetch( url );
        const parsed = await data.json();
        this.setState( { page: this.state.page - 1, articles: parsed.articles } )
        console.log( "prev" );
    }

    handleNext = async () =>
    {
        if ( this.state.page + 1 > Math.ceil( this.state.totalResults / 20 ) )
        {

        }
        else
        {
            const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ea54278051f84078a47ef170118fd2dc&page=${ this.state.page + 1 }&pageSize=20`;
            const data = await fetch( url );
            const parsed = await data.json();
            this.setState( { page: this.state.page + 1, articles: parsed.articles } )
            console.log( "Next" );
        }
    }
    render ()
    {
        return (
            <div className="container my-3">
                <div className="row">
                    {
                        this.state.articles.map( article => ( <div className="col" key={ article.url }>
                            <NewsItems title={ article.title ? article.title : "" } description={ article.description ? article.description : "" } url={ article.url } urlToImage={ article.urlToImage } />
                        </div> ) )
                    }
                    <div className="container d-flex justify-content-between">
                        <button type="button" disabled={ this.state.page === 1 } className="btn btn-dark" onClick={ this.handlePrev }>&larr; Previous</button>
                        <button type="button" className="btn btn-dark" onClick={ this.handleNext }>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
