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
    selectedRetweet = (index) => {
        //Clonar la lista de objetos
        let tweets2 = JSON.parse(JSON.stringify(this.state.tweets));
        //Actualizamos el valor de la propiedad selected
        if(tweets2[index].myRetweet===true) {
            tweets2[index].interaction.retweets=tweets2[index].interaction.retweets -1;
            tweets2[index].myRetweet=false;
            tweets2[index].selectedRetweet=false;
        }
        else{
            tweets2[index].interaction.retweets=tweets2[index].interaction.retweets + 1;
            tweets2[index].myRetweet=true;
            tweets2[index].selectedRetweet=true;

        }
       
         
         
         

        //Actualizamos el estado
        this.setState({tweets: tweets2});
    }
    selectedLike = (index) => {
        //Clonar la lista de objetos
        let tweets2 = JSON.parse(JSON.stringify(this.state.tweets));
        //Actualizamos el valor de la propiedad selected
        if(tweets2[index].myLike===true) {
            tweets2[index].interaction.likes=tweets2[index].interaction.likes - 1 ; 
            tweets2[index].myLike=false;
            tweets2[index].selectedLike=false;
         
        }
        else{
            tweets2[index].interaction.likes=tweets2[index].interaction.likes +1;
            tweets2[index].myLike=true;
            tweets2[index].selectedLike=true;
        }
          //Actualizamos el estado
        this.setState({tweets: tweets2});
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
                                selectedLike={this.selectedLike}
                                selectedRetweet={this.selectedRetweet}
                                index={tweet.id}
                                selectedL={tweet.selectedLike}
                                selectedR={tweet.selectedRetweet}
                                />
                        )
                    })
                }
                
            </div>
        );
    }
}

export default Feed;