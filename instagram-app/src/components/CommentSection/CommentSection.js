import React from "react";
import CommentInput from "./CommentInput";

class CommentSection extends React.Component {
  constructor(props) {
    //console.log(props);
    super(props);
    this.state = {
      typedComment: {
        id: "0",
        username: "noone",
        text: ""
      }
    };
  }

  addNewComment = thisComment => {
    const newComment = {
      id: Math.floor(Math.random() * 200),
      username: "Developer",
      text: thisComment
    };

    this.props.addNewComment(newComment, this.props.postId);
  };

  render() {
    return (
      <div className="comments">
        {this.props.comments.map(comment => {
          return (
            <div className="comment">
              <p>
                <strong>{comment.username}</strong> {comment.text}
              </p>
            </div>
          );
        })}
        <p>Placeholder Timestamp</p>
        <CommentInput addNewComment={this.addNewComment} />
      </div>
    );
  }
}

export default CommentSection;
