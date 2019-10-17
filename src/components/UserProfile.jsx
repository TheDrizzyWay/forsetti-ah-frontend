import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile, openReadStatsModal } from '../actions/profileActions';
import emptyUserImage from '../assets/svg/profilepix.svg';
import Button from './common/Button';
import ArticleListComponent from './common/ArticleList';
import { ReadStatsComponent } from './ReadStats';

class UserProfile extends Component {
  componentDidMount() {
    const {
      currentProfile,
      auth: {
        userObject: {
          id
        }
      }
    } = this.props;
    currentProfile(id);
  }

  openReadStatsModal = () => {
    const { openModal } = this.props;
    openModal();
  }

  render() {
    const { profile, loading, isReadStatsModalOpen } = this.props;
    const {
      props: {
        profile: {
          profile: {
            data = []
          }
        },
        auth: {
          userObject: {
            id: userId
          }
        }
      }
    } = this;
    const {
      firstname,
      lastname,
      username,
      followers = '',
      articlesRead = '',
      articlesWritten = '',
      articlesReadList = [],
      articlesWrittenList = [],
      bio = '',
      image,
      following
    } = data[0] || {};
    return (
      <React.Fragment>
        <ReadStatsComponent readList={articlesReadList} />
        <div className='Profile py-5'>
          <div className='container'>
            <div className='row mt-5'>
              <div className='col-md-2'>
                <div
                  className='profile-image px-md-0 px-5 rounded-circle'
                  style={{ backgroundImage: `url(${image || emptyUserImage})` }}
                  alt='profile pix'
                />
              </div>
              <div className='col-md-10'>
                <div className='row justify-content-center'>
                  <div className='col-md-12 text-md-left text-center'>
                    <h3 className='font-weight-bold pb-0'>
                      { firstname }
                      &nbsp;
                      {lastname}
                    </h3>
                    <p className='font-weight-light p-0'>{username}</p>
                  </div>
                </div>
                <div className='row justify-content-center'>
                  <div className='col-md-12 text-md-left text-center'>
                    <p className='font-weight-light'>
                      { bio || 'Write a short note about yourself' }
                    </p>
                  </div>
                </div>
                <div className='row justify-content-end'>
                  <div className='col-md-3 text-md-right text-center '>
                    <Link to='/editProfile'>
                      {
                        <Button
                          className='btn btn-primary btn-sm btn-color editButtton'
                          type='button'
                        >
                          EDIT PROFILE
                        </Button>
                      }
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='row justify-content-center my-5'>
              <div className='col-6 col-md-3 text-center'>
                <div className='card shadow bg-white card-hover'>
                  <div
                    className='row py-md-4 mask flex-center'
                    onClick={this.openReadStatsModal}
                    onKeyDown={this.openReadStatsModal}
                    role='button'
                  >
                    <div className='col-md-12'>
                      <span>{articlesRead}</span>
                    </div>
                    <div className='col-md-12'>
                      <span className='font-weight-bold list'>READS</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-6 col-md-3 text-center'>
                <div className='card shadow bg-white card-hover'>
                  <div className='row py-md-4'>
                    <div className='col-md-12'>
                      <span>{articlesWritten}</span>
                    </div>
                    <div className='col-md-12'>
                      <span className='font-weight-bold list'>WRITTEN</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-6 col-md-3 mt-3 mt-md-0 text-center'>
                <div className='card shadow bg-white card-hover'>
                  <div className='row py-md-4'>
                    <div className='col-md-12'>
                      <span>{followers}</span>
                    </div>
                    <div className='col-md-12'>
                      <span className='font-weight-bold list'>FOLLOWERS</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-6 col-md-3 mt-3 mt-md-0 text-center'>
                <div className='card shadow bg-white card-hover'>
                  <div className='row py-md-4'>
                    <div className='col-md-12'>
                      <span>{following}</span>
                    </div>
                    <div className='col-md-12'>
                      <span className='font-weight-bold list'>FOLLOWING</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-6'>
                <h5 className='font-weight-light'>
                            Your Articles
                </h5>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-8'>
                {articlesWrittenList.length === 0 && (
                  <div className='row'>
                    <div className='col-12'>
                      <h5 className='title p-10 font-weight-bold bg-red'>Article not found</h5>
                    </div>
                  </div>
                )}
                {articlesWrittenList.map(list => (
                  <ArticleListComponent
                    key={list.slug}
                    title={list.title}
                    description={list.description}
                    readingTime={list.readingTime}
                    image={list.image}
                    slug={list.slug}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>

    );
  }
}
const mapDispatchToProps = {
  currentProfile: getCurrentProfile,
  openModal: openReadStatsModal,
};

export const mapStateToProps = state => ({
  profile: state.profile,
  isReadStatsModalOpen: state.profile.isReadStatsModalOpen,
  auth: state.auth
});

const Profile = (connect(mapStateToProps, mapDispatchToProps)(UserProfile));


export {
  Profile,
  UserProfile
};
