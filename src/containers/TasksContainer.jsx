import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Tasks from "../components/Tasks";
import { processor } from "../redux";

class TasksContainer extends Component {
  render() {
    const { tasks } = this.props;
    return <Tasks tasks={tasks} />;
  }
}

const mapStateToProps = createStructuredSelector({
  tasks: processor.selectors.getTasks
});

export default connect(
  mapStateToProps,
  null
)(TasksContainer);
