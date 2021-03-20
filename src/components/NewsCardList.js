import React from 'react';
import NewsCard from './NewCard';

const NewsCardList = ({ news }) => {
  return (
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          <h1 className="titlenews">Latest News</h1>
    <div className="cardstyle">
      {
        news && news.map((news, i) => {
          return (
            <NewsCard
              key={i}
              author={news.author}
              title={news.title}
              description={news.description}
              url={news.url}
              urlToImage={news.urlToImage}
              publishedAt={news.publishedAt}
              />
          );
        })
      }
    </div>
    </div>
  );
}

export default NewsCardList;