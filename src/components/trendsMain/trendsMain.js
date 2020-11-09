import React from 'react';
import './styles.css';
import { HiOutlineDotsHorizontal } from "react-icons/hi";

class TrendsMain extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <>
                <div className="space-contents">
                    <div>
        <div className="style-trend-type">{this.props.category}</div>
                        <div className="style-tittle-trend">{this.props.title}</div>
                        <div className="style-tweets">{this.props.noTweets}</div>
                    </div>
                    <div className="icon-style-trends">
                        <HiOutlineDotsHorizontal />
                    </div>
                </div>
            </>
        )
    }
}

export default TrendsMain;