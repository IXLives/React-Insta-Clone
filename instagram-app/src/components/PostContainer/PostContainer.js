import React from 'react';
import likePic from '../../assets/likePic.png';
import comment from '../../assets/comment.png';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

class PostContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: ''
        };
    }

    render() {
        return (
            <div className = 'userPosts'>
                {this.props.profiles.map(profile => {
                    return (
                        <div className = 'post'>
                            <div className = 'header'>
                                <img src = {profile.thumbnailUrl} alt = 'thumbnail' />
                                <h3>{profile.username}</h3>
                            </div>
                            <img src = {profile.imageUrl} alt = 'image'  className = 'mainImage'/>
                            <div className = 'lowerContent'>
                                <div className = 'reactions'>
                                    <img src = {likePic} alt = 'likePic' />
                                    <img src = {comment} alt = 'comment' />
                                </div>
                                <div className = 'likes'>
                                <p><strong>{profile.likes}</strong>  likes</p>
                                </div>
                                <CommentSection comments = {profile.comments} />
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default PostContainer;