import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import * as mutations from '../store/mutations';

const TaskDetail = ({
id,
comments,
task,
isComplete,
groups,
setTaskCompletion,
setTaskGroup,
setTaskName,
}) => (
<div>
  <div>
    <input
      onChange={setTaskName}
      value={task.name}
    />
  </div>
  <div>
    <button
      onClick={() => setTaskCompletion(id, !isComplete)}
    >
      {isComplete ? `Reopen` : `Complete`}
    </button>
  </div>
    <select
      onChange={setTaskGroup}
      value={task.group}
    >
      {groups.map((group) =>(
        <option key={group.id} value={group.id}>{group.name}</option>
      ))}
    </select>
  <div>
  </div>
  <div>
    <Link to={'/dashboard'}>
      <button>Done</button>
    </Link>
  </div>
</div>
);

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const task = state.tasks.find((task) => task.id === id);

  return {
    id: ownProps.match.params.id,
    task: task,
    isComplete: task.isComplete,
    groups: state.groups,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.id;

  return {
    setTaskCompletion(id, isComplete) {
      dispatch(mutations.setTaskCompletion(id, isComplete));
    },
    setTaskGroup(e) {
      dispatch(mutations.setTaskGroup(id, e.target.value));
    },
    setTaskName(e) {
      dispatch(mutations.setTaskName(id, e.target.value));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetail);
