import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import Skeleton from 'react-skeleton-loader';
import { getAritlces, openModalAction } from '../actions';
import {
  Articles,
  SignUpModalComponent,
  HeaderComponent,
  Footer,
  SideDrawerComponent,
  LoginModalComponent
} from '../components';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageCount: 1
    };
  }

  componentDidMount() {
    const { props: { history: { action } } } = this;
    const { getAllArticles, openModal } = this.props;
    const { pageCount } = this.state;
    getAllArticles(pageCount);
    if (action === 'REPLACE' || action === 'PUSH') openModal();
  }

  pageCountHandler = () => {
    const { getAllArticles } = this.props;
    this.setState(prevState => ({
      pageCount: prevState.pageCount + 1
    }), async () => {
      const { pageCount } = this.state;
      await getAllArticles(pageCount);
    });
  }

  render() {
    const {
      articles,
      showSideDrawer: { showSideDrawer },
      modal: { showModal, displayModal }
    } = this.props;
    return (
      <div className='landing-page'>
        <div className='container landing'>
          <div className='row my-5'>
            <div className='col-md-12' />
          </div>
          <div className='row'>
            <div className='col-md-8'>
              {
                articles.isLoading ? (
                  <div className='row'>
                    <div className='col-md-12'>
                      <Skeleton width='100px' height='10px' />
                    </div>
                    <div className='col-md-12'>
                      <Skeleton width='100%' height='100px' count={1} />
                    </div>
                  </div>
                ) : (
                  <Row className=''>
                    <div className='col-md-12'>
                      {
                        articles.articles && (
                        <Articles
                          articles={articles.articles}
                          loadMore={this.pageCountHandler}
                        />
                        )
                      }
                    </div>
                  </Row>
                )
              }
            </div>
            <div className='col-md-4' />
          </div>
        </div>
        <SignUpModalComponent isOpen={displayModal} />
        <Row className='articles'>
          <Col sm={{ size: 6 }} />
          <Col sm={{ size: 4 }} />
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { articles } = state;
  const { showSideDrawer, modal } = state;
  return { articles, showSideDrawer, modal };
};
const mapDispatchToProps = {
  openModal: openModalAction,
  getAllArticles: page => getAritlces(page)
};
const LandingPageComponent = connect(mapStateToProps, mapDispatchToProps)(LandingPage);

export {
  LandingPage,
  LandingPageComponent
};
