import React from "react";
import Tweet from "./tweet/tweet";
import {feed} from '../source';

class Feed extends React.Component {
    constructor(props) {
        super();
        this.state = {
            tweets: feed,
            
        }
    }

    render() {


        return (
            <div>
                {
                    this.state.tweets.map( tweet => {
                        return (
                            <Tweet
                                profileImg={tweet.profileImg}
                                profile={tweet.profile}
                                username={tweet.username}
                                content={tweet.content}
                                date={tweet.date}
                                comments={tweet.interaction.comments}
                                retweets={tweet.interaction.retweets}
                                likes={tweet.interaction.likes}
                                />
                        )
                    })
                }
                
            </div>
        );
    }
}

export default Feed;