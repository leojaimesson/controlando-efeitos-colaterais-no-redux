import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ConfirmModal from "../components/ConfirmModal";
import { processor } from "../redux";

class ConfirmCancelProcessModalContainer extends Component {
  closeModal = () => {
    const { closeConfirmCancelProcessModalAction } = this.props;
    closeConfirmCancelProcessModalAction();
  };

  cancelProcess = () => {
    const { cancelProcessAction } = this.props;
    cancelProcessAction();
    this.closeModal();
  };

  render() {
    const { isOpen } = this.props;
    return (
      <ConfirmModal
        title="Confirm cancel process"
        isOpen={isOpen}
        closeFn={this.closeModal}
        cancelFn={this.closeModal}
        confirmFn={this.cancelProcess}
      >
        Do you really want to cancel this process?
      </ConfirmModal>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isOpen: processor.selectors.confirmCancelProcessModalIsOpen
});

const mapDispatchToProps = {
  closeConfirmCancelProcessModalAction:
    processor.actions.closeConfirmCancelProcessModal,
  cancelProcessAction: processor.actions.cancelProcess
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmCancelProcessModalContainer);
