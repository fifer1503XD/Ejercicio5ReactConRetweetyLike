import React from 'react';
import PostTweet from '../postTweet/post-tweet';
import Feed from '../feed';
import {feed} from '../../source';
class PrimaryCol extends React.Component{
    constructor(props){
        super();
        this.state = {
            newMessage: "",
            tweet:feed
        }
    }
    writeInInput = (evento) => {
        console.log(this.state.tweet)
        const message = evento.target.value;
        this.setState({ newMessage: message });
        console.log(this.state.newMessage)
        
      };

      sendMessage = () => {
        let tweets2 = JSON.parse(JSON.stringify(this.state.tweet));
        let newTweet = {
            id:"",
            profileImg:"https://www.redwolf.in/image/catalog/stickers/marvel-avengers-logo-sticker.jpg",
            profile: "initSquad",
            username: "@initSquad",
            content: this.state.newMessage,
            date: "hoy",
            interaction: {
                comments: 0,
                retweets: 0,
                likes: 0
            },
            verified: true,
            blocked: true,
            myLike: false,
            myRetweet:false,
            selectedlike:false,
            selectedRetweet:false,
            showMenu:false}
            feed.unshift(newTweet)
            console.log(feed);
            this.setState({newMessage:""})
            this.setState({tweet:feed});
            
        }
    render(){
    return (
        <div className="t-col-container">
            <h3>Inicio</h3>
            <PostTweet profileUrl={this.props.profileUrl}
            newMessage={this.state.newMessage}
            writeInInput={this.writeInInput}
            sendMessage={this.sendMessage}
          />
            <Feed newMessage={this.state.newMessage} feed={this.state.tweet}/>
        </div>
        
    )
    
}}
// handleInput = (evento) => {
//     //Capturar lo que está escribiendo el usuario
//     const message = evento.target.value;
//     this.setState({ newMessage: message });
//   };
export default PrimaryCol;