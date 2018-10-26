import React, { Component } from 'react'
import axios from 'axios'


class Home extends Component {
    state = {
        articles : []
    }
    componentDidMount(){
        axios.get('https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=8b8ca926ec314a58b0c1cbb571d27fb1')
            .then(res => {
                this.setState({
                    articles : res.data.articles
                })
                console.log(res);
            })
    }

    render() {
        const { articles } = this.state;
        const articleList = articles.length ? (
            articles.map(article => {
                return(
                    <div className="post card" key={article.source.id}>
                        <div className="card-content">
                            <span className="card-title">{article.title}</span>
                            <p>{article.content}</p>
                            <p>{article.description}</p>
                            <a>{article.url}</a>
                            <div className="container">
                            <img src= {article.urlToImage} />
                            </div>
                            
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No Articles Yet</div>
        )
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {articleList}
            </div>
        )
    }
}

export default Home;