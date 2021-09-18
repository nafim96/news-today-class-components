import React, { Component } from 'react'
import NewsItems from '../NewsItems/NewsItems'
import Spinner from '../Spinner/Spinner';
import propTypes from "prop-types"

export class News extends Component
{
    static defaultProps = {
        country: "bg",
        pageSize: 8,
        category: "general"
    }
    static propTypes = {
        country: propTypes.string,
        pageSize: propTypes.number,
        category: propTypes.string,
    }
    constructor ()
    {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
    }
    async componentDidMount ()
    {
        const url = `https://newsapi.org/v2/top-headlines?country=${ this.props.country }&category=${ this.props.category }&apiKey=ea54278051f84078a47ef170118fd2dc&page=1&pageSize=${ this.props.pageSize }`;
        this.setState( { loading: true } );
        const data = await fetch( url );
        const parsed = await data.json();
        this.setState( { articles: parsed.articles, loading: false } );

    }

    handlePrev = async () =>
    {
        const url = `https://newsapi.org/v2/top-headlines?country=${ this.props.country }&category=${ this.props.category }&apiKey=ea54278051f84078a47ef170118fd2dc&page=${ this.state.page - 1 }&pageSize=${ this.props.pageSize }`;
        this.setState( { loading: true } );
        const data = await fetch( url );
        const parsed = await data.json();
        this.setState( { page: this.state.page - 1, articles: parsed.articles, loading: false } );
        console.log( "prev" );
    }

    handleNext = async () =>
    {
        if ( !( this.state.page + 1 > Math.ceil( this.state.totalResults / this.props.pageSize ) ) )
        {
            const url = `https://newsapi.org/v2/top-headlines?country=${ this.props.country }&category=${ this.props.category }&apiKey=ea54278051f84078a47ef170118fd2dc&page=${ this.state.page + 1 }&pageSize=${ this.props.pageSize }`;
            this.setState( { loading: true } );
            const data = await fetch( url );
            const parsed = await data.json();
            this.setState( { page: this.state.page + 1, articles: parsed.articles, loading: false } )
            console.log( "Next" );
        }

    }
    render ()
    {
        return (
            <div className="container my-3">
                <h1 className="text-center">Top News Today</h1>
                <div className="row">
                    { this.state.loading && <Spinner /> }
                    {
                        !this.state.loading && this.state.articles.map( article => ( <div className="col-md-4" key={ article.url }>
                            <NewsItems title={ article.title ? article.title : "" } description={ article.description ? article.description : "" } url={ article.url } urlToImage={ article.urlToImage } author={ article.author } publishedAt={ article.publishedAt } source={ article.source.name } />
                        </div> ) )
                    }
                    <div className="container d-flex justify-content-between">
                        <button type="button" disabled={ this.state.page === 1 } className="btn btn-dark" onClick={ this.handlePrev }>&larr; Previous</button>
                        <button disabled={ this.state.page + 1 > Math.ceil( this.state.totalResults / this.props.pageSize ) } type="button" className="btn btn-dark" onClick={ this.handleNext }>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
