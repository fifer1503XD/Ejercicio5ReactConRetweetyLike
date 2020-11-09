import React from 'react';
import FeedTrends from '../feedTrends';
import SearchSideBar from '../SearchSideBar/searchSideBar';

const SidebarCol = () => {
    return (
        <div className="t-sidebar-col">
           <SearchSideBar />
           <FeedTrends /> 
        </div>
    )
}

export default SidebarCol;