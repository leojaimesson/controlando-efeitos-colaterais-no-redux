import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ConfirmModal from "../components/ConfirmModal";
import { processor } from "../redux";

class ConfirmStartProcessModalContainer extends Component {
  closeModal = () => {
    const { closeConfirmStartProcessModalAction } = this.props;
    closeConfirmStartProcessModalAction();
  };

  startProcess = () => {
    const { startProcessAction } = this.props;
    startProcessAction();
    this.closeModal();
  };

  render() {
    const { isOpen } = this.props;
    return (
      <ConfirmModal
        title="Confirm start process"
        isOpen={isOpen}
        closeFn={this.closeModal}
        cancelFn={this.closeModal}
        confirmFn={this.startProcess}
      >
        Do you really want to start a process?
      </ConfirmModal>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isOpen: processor.selectors.confirmStartProcessModalIsOpen
});

const mapDispatchToProps = {
  closeConfirmStartProcessModalAction:
    processor.actions.closeConfirmStartProcessModal,
  startProcessAction: processor.actions.startProcess
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmStartProcessModalContainer);
