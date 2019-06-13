import React from 'react';

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            typedComment: '',
        }
    }

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
            </div>
        )
    }
}

export default CommentSection;