import React from 'react';
import './styles.css';

const PostTweet = (props) => {
    return (
        <div>
            <div className="t-row t-post-tweet">
                <div className="t-profile-img">
                    <img src={props.profileUrl}  alt="profile" />
                </div>
                <div>
                    <input placeholder="¿Qué está pasando compa?" 
                    onChange={props.writeInInput}
                    value={props.newMessage}/>
                    <div className="t-post-options">
                        <button
                        onClick={props.sendMessage}
                        >Twittear</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default PostTweet;