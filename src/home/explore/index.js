import React from "react";
import PostSummaryList from "../post-summary-list";
import WhoToFollowList from "../who-to-follow-list";
import "./index.css";
const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-9 position-relative">
                    <input placeholder="Search Restaurant"
                           className="form-control rounded-pill ps-5"/>
                    <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
                </div>
                <div className="col-3">
                    <button type="submit" className="btn btn-primary">Log in</button> &thinsp;
                    <button type="submit" className="btn btn-danger">Sign up</button>
                </div>
            </div>
            <h3 align="center">Categories</h3>
            <WhoToFollowList/>
            <br/>

            <div className="position-relative mb-2">
                <img src="/images/bosrestaurant.jpg" className="w-100" alt='Starship'/>
                <h1 className="position-absolute wd-nudge-up text-white">
                    Explore restaurants in your area</h1>
            </div>
            <br/>
            <h3 align="center">Recent Reviews</h3>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;
