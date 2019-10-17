import React, { Component } from 'react';
import { connect } from 'react-redux';
import TagsInput from 'react-tagsinput';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import { closeTagsModal } from '../actions';

class TagsModal extends Component {
    state = { tags: [] };

    handleChange = (tags) => {
      this.setState({ tags });
    }

    closeModal = () => {
      const { closetagsmodal } = this.props;
      closetagsmodal();
    }

    handleSubmit = () => {
      const { publishHandler } = this.props;
      const { tags } = this.state;
      this.closeModal();
      publishHandler(tags);
    }

    render() {
      const { modal, tags } = this.state;
      const { className, tagsmodal } = this.props;
      return (
        <div>
          <Modal isOpen={tagsmodal.showTagsModal} toggle={this.closeModal} className={className}>
            <ModalHeader toggle={this.closeModal}>Add Tags(Optional)</ModalHeader>
            <ModalBody>
              <p>You can separate your tags with either of the SPACEBAR or ENTER keys.</p>
              <TagsInput
                value={tags}
                onChange={this.handleChange}
                addKeys={[13, 32]}
                maxTags={10}
              />
            </ModalBody>
            <ModalFooter>
              <Button color='info' onClick={this.handleSubmit}>Submit</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
}
const mapStateToProps = state => ({
  tagsmodal: state.modal
});

const mapDispatchToProps = {
  closetagsmodal: closeTagsModal
};

export default connect(mapStateToProps, mapDispatchToProps)(TagsModal);
