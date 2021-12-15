import React from 'react'
import "./_sidebar.scss"

import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied,

} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { log_out } from '../../redux/actions/auth.action'
import { Link } from 'react-router-dom'


const Sidebar = ({ sidebar, toggleSidebar }) => {

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(log_out())
    }
    return (
        <nav className={sidebar ? 'sidebar open' : 'sidebar'}
            onClick={() => toggleSidebar(false)}
        >
            <Link to='/'>
                <li >
                    <MdHome size={23} />
                    <span>Home</span>
                </li>
            </Link>
            <hr />
            <Link to='/feed/subscriptions' >
                <li >
                    <MdSubscriptions size={23} />
                    <span>Subscriptions</span>
                </li>
            </Link>
            <hr />
            <li>
                <MdThumbUp size={23} />
                <span>Liked Videos</span>
            </li>
            <hr />
            <li>
                <MdHistory size={23} />
                <span>History</span>
            </li>
            <hr />
            <li>
                <MdLibraryBooks size={23} />
                <span>Library</span>
            </li>
            <hr />
            <li>
                <MdSentimentDissatisfied size={23} />
                <span>Home</span>
            </li>
            <hr />
            <li onClick={handleLogout}>
                <MdExitToApp size={23} />
                <span>Logout</span>
            </li>
            <hr />
        </nav>

    )
}

export default Sidebar
