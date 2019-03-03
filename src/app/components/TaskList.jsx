import React from 'react'
import {connect} from 'react-redux'

import {requestTaskCreation} from "../store/mutaion";


export const TaskList = ({tasks, name, id, createNewTask}) => (
    <div>
        <div>
            <h3>{name}</h3>
        </div>
        <div>
            {tasks.map(task => (
                <div key={task.id}>{task.name}</div>
            ))}
        </div>

        {/*creating add Task button*/}

        <button  onClick={()=>createNewTask(id)}> Add New Task</button>
    </div>
)

const mapStateToProps = (state, ownProps) => {
    let groupId = ownProps.id;
    return {
        name: ownProps.name,
        id: groupId,
        tasks: state.tasks.filter(task => task.group === groupId)
    }
};

// Adding dispatch function to the add new Task

const mapDispatchToProps  = (dispatch, ownProps) => {
    return {
        createNewTask(id) {
            console.log("Creating New Task ..", id);
            dispatch(requestTaskCreation(id))
        }
    }
}



export const ConnectedTaskList = connect(mapStateToProps,mapDispatchToProps)(TaskList);
