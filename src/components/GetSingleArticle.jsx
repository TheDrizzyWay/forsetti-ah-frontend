import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getSingleArticle } from '../actions/articleActions';
import { postComment, postThreadComment, bookmarkArticle } from '../actions';
import ArticleHeader from './ArticleHeader';
import ArticleBody from './ArticleBody';
import Comments from './Comments';
import CommentSection from './CommentSection';
import Notfound from './NotFound';

export class GetSingleArticle extends Component {
  componentDidMount() {
    this.getSingle();
  }

  getSingle = () => {
    const {
      getOneArticle,
      match: {
        params: {
          slug
        }
      },
      article: {
        title
      },
      token
    } = this.props;
    document.title = title || 'Home to the creative | Authors Haven';
    getSingleArticle(slug, token);
  }

  bookmark = () => {
    const {
      createBookmark,
      article: {
        id
      }
    } = this.props;
    createBookmark(id);
    this.getSingle();
  }

  render() {
    const {
      article: {
        success
      },
    } = this.props;
    if (!success) {
      return (
        <Notfound text='article' />
      );
    }
    const {
      status,
      article: {
        author: {
          image = '',
          username
        },
        body,
        claps,
        readingTime,
        title,
        image: articleImage,
        createdAt,
        id,
        Bookmarked
      },
      comments,
      commentCount,
      commentLoading,
      postNewComment,
      postNewThreadComment,
      token
    } = this.props;
    const {
      match: { params: { slug } }, history
    } = this.props;

    const headerProps = {
      title,
      image,
      username,
      readingTime,
      articleImage,
      createdAt,
    };
    const bodyProps = {
      body,
      claps,
      id,
      bookmark: this.bookmark,
      status,
      Bookmarked
    };
    return (
      <Fragment>
        <ArticleHeader {...headerProps} />
        <div className='container'>
          <ArticleBody {...bodyProps} />
          <Comments
            slug={slug}
            commentLoading={commentLoading}
            postNewComment={postNewComment}
            history={history}
            token={token}
          />
          <CommentSection
            slug={slug}
            commentsList={comments}
            commentCount={commentCount}
            postNewThreadComment={postNewThreadComment}
            history={history}
            token={token}
          />
        </div>
      </Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  article: state.article,
  commentLoading: state.comments.isLoading,
  token: state.auth.token
});

export const mapDispatchToProps = {
  getOneArticle: getSingleArticle,
  createBookmark: bookmarkArticle,
  postNewComment: postComment,
  postNewThreadComment: postThreadComment
};
export const SingleArticle = connect(mapStateToProps, mapDispatchToProps)(withRouter(GetSingleArticle));
