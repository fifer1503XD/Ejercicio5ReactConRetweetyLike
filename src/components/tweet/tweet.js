import React from 'react';
import './styles.css';
import{
HomeSolid,
ChatSolid,
RefreshSolid,
HeartSolid

} from "@graywolfai/react-heroicons";

class Tweet extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="tweet-container">
                <div className="row">
                    <div className="c1">
                        <img src={this.props.profileImg} alt="profile" />
                    </div>
                    <div className="c2">
                        <h6>{this.props.profile}</h6>
                        <h6>{this.props.username}</h6>
                    </div>
                    <div className="c3"></div>
                </div>
                <div className="row">
                    <p className="content">                
                        {this.props.content}
                      <h5>{this.props.date}</h5>  </p>
                    
                </div>
                <div className="row1"> 
                
                    <div className={`t-icon col ${this.props.selected && 'selected'}`}>{<ChatSolid/>}{this.props.comments}</div>
                    <div className={`t-icon col ${this.props.selectedR && 'selected'}`}onClick={() => this.props.selectedRetweet(this.props.index)}><RefreshSolid className={`${this.props.selectedR && 'selected'}`}/>{this.props.retweets}</div>
                    <div className={`t-icon col ${this.props.selectedL && 'selected'}`}onClick={() => this.props.selectedLike(this.props.index)}>{<HeartSolid/>}{this.props.likes}</div>
                    <p></p>
                </div>
                
        
                 

            </div>
        )
    }
}

export default Tweet;

// https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg
//@TwitterSafety
//Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus et enim sodales congue sed ac ante. Maecenas tincidunt tortor vel lorem semper vestibulum. Phasellus placerat arcu ac dui ultricies, sed tempor dolor rhoncus. Cras id leo sem.