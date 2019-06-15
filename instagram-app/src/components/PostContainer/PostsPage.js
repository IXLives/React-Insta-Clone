import React from 'react';
import PostContainer from './PostContainer';

class PostsPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <PostContainer
                profiles={this.props.profiles}
                addNewComment={this.props.addNewComment}
                likePost={this.props.likePost}
            />
        )
    }
}

export default PostsPage;