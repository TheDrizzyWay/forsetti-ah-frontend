import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import ToastMessage from './common/ToastMessage';
import { getCurrentProfile, updateProfile } from '../actions';
import emptyUserImage from '../assets/svg/profilepix.svg';
import imageUploadIcon from '../assets/images/imageclick.png';


class EditUserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      bio: '',
      imageUrl: null,
      imageFile: null,
      firstnameError: '',
      lastnameError: ''
    };
    this.editProfile = this.editProfile.bind(this);
    this.getImage = this.getImage.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  componentDidMount() {
    const { currentProfile, profile } = this.props;
    const {
      firstname,
      lastname,
      bio,
      image
    } = profile.profile.data[0];
    this.setUser(firstname, lastname, bio, image);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onFirstnameBlur = () => {
    const { firstname } = this.state;
    const regexFirstname = /[!@#$%^&*(),.?":{}|<>_]/;
    if (firstname.length < 2) {
      return this.setState(() => ({
        firstnameError: 'firstname must be at least 2 characters'
      }));
    }
    if (regexFirstname.test(firstname.trim())) {
      return this.setState(() => ({
        firstnameError: 'firstname cannot contain special characters'
      }));
    }
    return true;
  }

  onFirstnameChange = ({ target: { value: firstname } }) => this.setState({ firstname, firstnameError: '' });

  onLastnameBlur = () => {
    const { lastname } = this.state;
    const regexLastname = /[!@#$%^&*(),.?":{}|<>_]/;
    if (lastname.length < 2) {
      return this.setState(() => ({
        lastnameError: 'lastname must be at least 2 characters'
      }));
    }
    if (regexLastname.test(lastname.trim())) {
      return this.setState(() => ({
        lastnameError: 'lastname cannot contain special characters'
      }));
    }
    return true;
  }

  onLastnameChange = ({ target: { value: lastname } }) => this.setState({ lastname, lastnameError: '' });

  setUser = (firstname, lastname, bio, image) => this.setState({
    firstname,
    lastname,
    bio,
    image
  });


  getImage = () => {
    document.getElementById('file_upload').click();
  };

  uploadImage(event) {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    return this.setState({ image: imageUrl, imageUrl, imageFile });
  }

  /**
   *  Redirect user after successful profile update
   */
  redirectUser() {
    const { history } = this.props;
    history.push('/profile');
  }

  async editProfile(e) {
    e.preventDefault();
    const {
      firstname,
      lastname,
      bio,
      imageFile,
      firstnameError,
      lastnameError,
    } = this.state;
    const userProfile = {};
    if (firstname) {
      userProfile.firstname = firstname;
    }
    if (lastname) {
      userProfile.lastname = lastname;
    }
    if (bio) {
      userProfile.bio = bio;
    }
    if (imageFile) {
      userProfile.image = imageFile;
    }
    const { profileUpdate } = this.props;
    if (firstnameError === '' && lastnameError === '') {
      const res = await profileUpdate(userProfile);
      if (res && typeof res !== 'string') {
        toast(<ToastMessage message='Profile Update Successful. Redirecting.....' />, {
          type: 'success',
          closeButton: false,
          onClose: () => this.redirectUser(),
          hideProgressBar: true,
          autoClose: 0,
        });
      }
      if (typeof res === 'string') {
        toast(<ToastMessage message={res} />, {
          type: 'error',
          closeButton: false,
          hideProgressBar: true,
          autoClose: 5000,
        });
      }
    }
  }

  render() {
    const {
      firstname,
      lastname,
      bio,
      image,
      firstnameError,
      lastnameError,
      bioError,
      imageUrl,
    } = this.state;

    const hideElement = {
      display: 'none',
    };

    return (
      <React.Fragment>
        <div className='EditProfile'>
          <div className='container mt-5'>
            <div className='row py-3 justify-content-center'>
              <div className='col-md-12 text-center'>
                <h3 className=''>
                  Edit Profile
                </h3>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                <form
                  onSubmit={this.editProfile}
                  className='edit-form'
                >
                  <div className='row mb-3'>
                    <div className='col-md-12 text-center'>
                      <div className='row justify-content-center'>
                        <div className='col-md-4'>
                          <div
                            className='profile-image rounded-circle'
                            style={{ backgroundImage: `url(${image || emptyUserImage})` }}
                            alt='profile pix'
                            id='profile_picture'
                          >
                            <div
                              className='position-absolute bg-white rounded-circle px-2 py-2 img-upload'
                              style={{ bottom: '10px', outline: 'none', cursor: 'pointer' }}
                              onClick={this.getImage}
                              role='button'
                              tabIndex='0'
                              onKeyPress={this.getImage}
                            >
                              <img src={imageUploadIcon} alt='image_icon' />
                            </div>
                          </div>
                          <input
                            type='file'
                            id='file_upload'
                            style={hideElement}
                            onChange={this.uploadImage}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <span className='font-weight-bold'>
                        Firstname
                        </span>
                        <input
                          type='text'
                          name='firstname'
                          onChange={this.onFirstnameChange}
                          value={firstname}
                          className='form-control rounded-0'
                          onBlur={this.onFirstnameBlur}
                        />
                        <span className='text-danger text-capitalize'>
                          {firstnameError}
                        </span>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <span className='font-weight-bold'>
                        Lastname
                        </span>
                        <input
                          type='text'
                          name='lastname'
                          onChange={this.onLastnameChange}
                          value={lastname}
                          onBlur={this.onLastnameBlur}
                          className='form-control rounded-0'
                        />
                        <span className='text-danger text-capitalize'>
                          {lastnameError}
                        </span>
                      </div>
                    </div>
                    <div className='col-12'>
                      <div className='form-group'>
                        <span className='font-weight-bold'>
                        Biography
                        </span>
                        <textarea
                          cols='20'
                          rows='4'
                          onChange={this.onChange}
                          value={bio || ''}
                          name='bio'
                          className='form-control rounded-0'
                        />
                        <span className='text-danger text-capitalize'>
                          {bioError}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='row p mb-5'>
                    <div className='col-md-12 text-center'>
                      <button
                        className='btn btn-primary btn-md edit-btn rounded-0'
                        type='submit'
                        name='submit'
                      >
                        UPDATE PROFILE
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>

    );
  }
}

export const mapStateToProps = state => ({
  profile: state.profile
});

const mapDispatchToProps = {
  currentProfile: getCurrentProfile,
  profileUpdate: updateProfile
};

const EditProfile = (connect(mapStateToProps, mapDispatchToProps)(withRouter(EditUserProfile)));
export {
  EditProfile,
  EditUserProfile
};
