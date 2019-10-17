import React, { Component } from 'react';
import {
  Modal,
  ModalBody
} from 'reactstrap';
import { connect } from 'react-redux';
import ArticleListCard from './common/ArticleList';
import CancelIcon from './common/CancelIcon';
import { closeReadStatsModal } from '../actions/profileActions';

class ReadStats extends Component {
  closeReadModal = () => {
    const { dispatch } = this.props;
    dispatch(closeReadStatsModal());
  }

  render() {
    const { isReadStatsModalOpen, readList } = this.props;
    return (
      <div className='readstats'>
        <Modal isOpen={isReadStatsModalOpen} className='readstats-body'>
          <CancelIcon clicked={this.closeReadModal} />
          {readList.length === 0
            ? <h5 className='readstats-h5'>No Articles Read Yet</h5>
            : <h5 className='readstats-h5'>Articles Read</h5>}
          <br />
          <ModalBody className='readstats-body'>
            {
                readList.map(article => (
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
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isReadStatsModalOpen: state.profile.isReadStatsModalOpen
});

const ReadStatsComponent = (connect(mapStateToProps)(ReadStats));
export { ReadStatsComponent, ReadStats };
