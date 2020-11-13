import React from 'react';
import './styles.css';

const PostTweet = (props) => {
    return (
            <div className="containerPostTweet">
            <div className="t-row t-post-tweet">
                <div className="t-profile-img">
                    <img src={props.profileUrl}  alt="profile" />
                </div>

                    <input classname="buttonNewTweet" placeholder="¿Qué está pasando?" 
                    onChange={props.writeInInput}
                    value={props.newMessage}/>
                    <div className="t-post-options">
                        <button
                        onClick={props.sendMessage}
                        >Twittear</button>
                    </div>
                </div>
       </div>
    )
}

export default PostTweet;