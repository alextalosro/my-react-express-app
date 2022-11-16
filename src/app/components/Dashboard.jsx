import React from "react";
import { connect } from "react-redux";
import TaskList from "./TaskList";

const Dashboard = ({ groups }) => (
  <div>
      <h2>DashBoard</h2>
    {
      groups.map((group) => (
        <TaskList
          id={group.id}
          name={group.name}
        />
      ))
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    groups: state.groups,
  }
};

export default connect(mapStateToProps, null)(Dashboard);
