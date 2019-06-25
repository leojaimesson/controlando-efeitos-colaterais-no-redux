import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import View from "../components/View";
import Button from "../components/Button";
import Label from "../components/Label";
import { processor } from "../redux";
import TasksContainer from "./TasksContainer";
import ConfirmStartProcessModalContainer from "./ConfirmStartProcessModalContainer";
import ConfirmCancelProcessModalContainer from "./ConfirmCancelProcessModalContainer";
import ConfirmFinishProcessModalContainer from "./ConfirmFinishProcessModalContainer";

const ActionsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
`;

class HomeContainer extends Component {
  startProcess = () => {
    const { announceStartProcessAction } = this.props;
    announceStartProcessAction();
  };
  cancelProcess = () => {
    const { announceCancelProcessAction } = this.props;
    announceCancelProcessAction();
  };
  render() {
    const { totalValue, isProcessing } = this.props;
    return (
      <View
        title="Sequential Tasks"
        subtitle="Using Redux-Saga to handle sequential tasks"
      >
        <ActionsRow>
          <Label palette="primary">Total Value: {totalValue}</Label>
          <div>
            {isProcessing ? (
              <Button palette="alert" onClick={this.cancelProcess}>
                Cancel process
              </Button>
            ) : (
              <Button palette="success" onClick={this.startProcess}>
                Start process
              </Button>
            )}
          </div>
        </ActionsRow>
        <TasksContainer />
        <ConfirmStartProcessModalContainer />
        <ConfirmCancelProcessModalContainer />
        <ConfirmFinishProcessModalContainer />
      </View>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  totalValue: processor.selectors.getTotalValue,
  isProcessing: processor.selectors.isProcessing
});

const mapDispatchToProps = {
  startProcessAction: processor.actions.startProcess,
  cancelProcessAction: processor.actions.cancelProcess,
  announceStartProcessAction: processor.actions.announceStartProcess,
  announceCancelProcessAction: processor.actions.announceCancelProcess
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
