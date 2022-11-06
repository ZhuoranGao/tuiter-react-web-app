import Nav from "../nav";
import NavigationSidebar
    from "./navigation-sidebar";
import WhoToFollowListItem
    from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list/index";
import PostSummaryItem from "./post-summary-list/post-summary-item";
import PostSummaryList from "./post-summary-list";
// import '../vendors/bootswatch/bootstrap.min.css';
import ExploreComponent from "./explore";
import HomePostSummeryList from "./home/index.js";

import {Routes, Route} from "react-router";
import whoReducer
// ./who-to-follow-list/who-reducer
    from "./reducers/who-reducer";

import tuitsReducer from "./tuits/tuits-reducer";


import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileComponent from "./profile";
import profileReducer from "./profile/profile-reducer";
const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer,profiles:profileReducer}});


function Tuiter() {
    return (
        <Provider store={store}>
        <div className="row mt-2" >
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>

            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>

                <Routes>

                    <Route path="home"    element={<HomePostSummeryList/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                    <Route path="profile" element={<ProfileComponent/>}/>
                </Routes>


            </div>
            <div className="col-10 d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">

                <WhoToFollowList/>
            </div>

        </div>
        </Provider>

    );
}

export default Tuiter