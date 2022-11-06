import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = (
) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a className="list-group-item"><i className="fab fa-twitter "></i></a>
            <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <i className="fas fa-home me-1 "></i>Home
            </Link>



            <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <i className="fas fa-hashtag me-1 "></i>Explore
            </Link>



            <Link to="/" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="fas fa-bell me-1 "></i>Notifications
            </Link>



            <Link to="/" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="fas fa-envelope me-1 "></i>Messages
            </Link>


            <Link to="/" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="fas fa-bookmark me-1 "></i>Bookmarks
            </Link>



            <Link to="/" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="fas fa-list-ul me-1 "></i>Lists
            </Link>



            <Link to="/tuiter/profile/" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <i className="fas fa-user me-1 "></i>Profile
            </Link>




            <Link to="/" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <i className="fas fa-info-circle me-1 "></i>More
            </Link>
        </div>
    );
};
export default NavigationSidebar;

