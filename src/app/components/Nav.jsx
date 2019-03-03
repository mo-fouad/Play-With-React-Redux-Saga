import React from 'react'
import {connect} from 'react-redux'
import { Link } from "react-router-dom";

const Nav = () => (
    <nav>
        <Link  to="/dashboard">My Application</Link>
    </nav>
)


// creating connected Nav
export const ConnectedNav = connect(state => state ) (Nav);
