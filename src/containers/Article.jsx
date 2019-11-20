import React, { Component } from 'react';
import { SingleArticle } from '../components/GetSingleArticle';

class Article extends Component {
  componentDidMount() {
    if (window) window.scrollTo(0, 0);
  }

  render() {
    return (
      <SingleArticle />
    );
  }
}

export default Article;
