import React from 'react';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            typedComment: {
                id: '0',
                username: 'noone',
                text: '',
            },
        }
    }

    addNewComment = thisComment => {
        const newComment = {
            id: '1',
            username: 'username',
            text: thisComment,
        };

        this.setState({
            typedComment: [...this.setState.typedComment, newComment]
        });
    };

    render() {
        return (
            <div className = 'comments'>
                {this.props.comments.map(comment => {
                    return (
                        <div className = 'comment'>
                            <p><strong>{comment.username}</strong> {comment.text}</p>
                        </div>
                    )
                })}
                <p>Placeholder Timestamp</p>
                <CommentInput addNewComment = {this.addNewComment}/>
            </div>
        )
    }
}

export default CommentSection;