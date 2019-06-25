import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ConfirmModal from "../components/ConfirmModal";
import { processor } from "../redux";

class ConfirmFinishProcessModalContainer extends Component {
  closeModal = () => {
    const {
      closeConfirmFinishModalAction,
      resetProcessStateAction
    } = this.props;
    resetProcessStateAction();
    closeConfirmFinishModalAction();
  };

  startProcess = () => {
    const { startProcessAction } = this.props;
    startProcessAction();
  };

  render() {
    const { isOpen } = this.props;
    return (
      <ConfirmModal
        title="The processs was finished"
        isOpen={isOpen}
        closeFn={this.closeModal}
        cancelFn={this.closeModal}
        confirmFn={this.startProcess}
      >
        Do you want to start a new process?
      </ConfirmModal>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isOpen: processor.selectors.confirmFinishProcessModalIsOpen
});

const mapDispatchToProps = {
  closeConfirmFinishModalAction:
    processor.actions.closeConfirmFinishProcessModal,
  resetProcessStateAction: processor.actions.resetProcessState,
  startProcessAction: processor.actions.startProcess
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmFinishProcessModalContainer);
