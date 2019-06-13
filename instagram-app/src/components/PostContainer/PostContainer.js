import React from 'react';
import likePic from '../../assets/likePic.png';
import comment from '../../assets/comment.png';
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: ''
        };
    }

    render() {
        return (
            <div>
                {this.props.profiles.map(profile => {
                    return (
                        <div>
                        <div className = 'Header'>
                            <img src = {profile.thumbnailUrl} alt = 'thumbnail' />
                            <h3>{profile.username}</h3>
                        </div>
                        <img src = {profile.imageUrl} alt = 'image' />
                        <div className = 'reactions'>
                            <img src = {likePic} alt = 'likePic' />
                            <img src = {comment} alt = 'comment' />
                        </div>
                        <h3>{profile.likes} likes</h3>
                        <CommentSection comments = {profile.comments} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default PostContainer;