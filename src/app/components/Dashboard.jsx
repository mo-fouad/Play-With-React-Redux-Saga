import React from 'react';
import { connect } from  'react-redux'

import {ConnectedTaskList} from "./TaskList";

// we used round brackets not curly ones to to say that is returning an object not a function
// the arguments passed here represnets the part of the state that the app will handel

// to get this groups that passed into the component we have to connect them
export const Dashboard = ( {groups} ) => (
    <div>
        <h2>DashBoard</h2>
        {
            groups.map( (group) => (
                <ConnectedTaskList key={group.id} id={group.id} name={groups.name}   />
            ))
        }
    </div>
)

// we connect them with this function

function mapStateToProps (state) {
    return {
        groups:state.groups
    }
}

// then we export the component as a connected component

export const ConnectedDashbord = connect(mapStateToProps) (Dashboard ) // this connect from react-redux takes this tow functions and connect them
