import React from "react";
import TrendsMain from "./trendsMain/trendsMain";
import {Trend} from "../trend"
import SearchSideBar from "./SearchSideBar/searchSideBar";

class FeedTrends extends React.Component {
    constructor(props){
        super();
        this.state = {
            searchtrends:"",
            trends: Trend,
        }
    }

    handleSearch = (event) => {
        //capturara al escribir en input
        const trend = event.target.value;
        this.setState({ searchtrends: trend });
    };

    render(){
        return(
           <div>
                 <SearchSideBar
                   change={this.handleSearch}
                   valueChangeInput={this.state.searchtrends}
                   className="lupa"
               />
               <h2 className="sidebar-title">Qué está pasando</h2>
               {
                this.state.trends
                    .filter((trend)=>
                    trend.title
                        .toLowerCase()
                        .includes(this.state.searchtrends.toLowerCase())
                    )
                    .map((trend)=>{
                        return(
                            <>
                                <TrendsMain 
                                    category={trend.category}
                                    title={trend.title}
                                    noTweets={trend.noTweets}
                                /> 
                           </>
                        )
                    })
               }
           </div> 
        )
    }

}

export default FeedTrends;