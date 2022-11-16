import React from "react";
import { connect } from "react-redux";
import { requestTaskCreation } from "../store/mutations";

export const TaskList = ({ tasks, name, groupId, createNewTask }) => (
  <div>
    <h3>
      {name}
    </h3>
    <div>
      {tasks.map((task) => (
        <div key={task.id}>{task.name}</div>
      ))}
    </div>
    <button
      onClick={() => createNewTask(groupId)} 
    >
      Create New
    </button>
  </div>
)

const mapStateToProps = (state, ownProps) => {
  return {
    name: ownProps.name,
    groupId: ownProps.id,
    tasks: state.tasks.filter((task) => task.group === ownProps.id),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createNewTask(id){
      console.log('Creating new task...', id);
      dispatch(requestTaskCreation(ownProps.id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
