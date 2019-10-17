import React, { Component, Fragment } from 'react';
import Button from './common/Button';
import ArticleListCard from './common/ArticleList';

class Articles extends Component {
  listArticles = () => {
    const { articles, loadMore } = this.props;
    return (
      <div className='row'>
        <div className='col-md-12'>
          {
                articles.map(article => (
                  <ArticleListCard
                    key={Math.random(Date.now())}
                    title={article.title}
                    description={article.description}
                    readingTime={article.readingTime}
                    createdAt={article.createdAt}
                    image={article.image}
                    slug={article.slug}
                  />
                ))
            }
        </div>
        <div className='col-md-12 text-center my-5'>
          <div className='row justify-content-center'>
            <div className='col-6'>
              { articles.length % 10 === 0 && (
              <Button
                className='load-btn rounded-0 font-weight-light'
                block
                onClick={loadMore}
              >
                  Load More
              </Button>
              )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <Fragment>
        <div className='Articles'>
          { this.listArticles() }
        </div>
      </Fragment>
    );
  }
}
export default Articles;
