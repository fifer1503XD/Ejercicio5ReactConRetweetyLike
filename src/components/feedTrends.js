import React from "react";
import TrendsMain from "./trendsMain/trendsMain";
import {Trend} from "../trend"

class FeedTrends extends React.Component {
    constructor(props){
        super();
        this.state = {
            trends: Trend
        }
    }

    render(){
        return(
           <div>
               {
                this.state.trends.map(itemtrend => {
                    return(
                        <TrendsMain
                            category={itemtrend.category}
                            title={itemtrend.title}
                            noTweets={itemtrend.noTweets}
                        />
                    )
                })  
               }
           </div> 
        )
    }

}

export default FeedTrends;