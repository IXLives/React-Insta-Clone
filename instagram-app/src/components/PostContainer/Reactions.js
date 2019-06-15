import React from "react";
import likePic from "../../assets/likePic.png";
import comment from "../../assets/comment.png";

class Reactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  likeHandler = e => {
    e.preventDefault();
    this.props.likePost(this.props.profile.id)
  };

  render() {
    return (
      <div>
        <button onClick={this.likeHandler}>
          <img src={likePic} alt="likePic" />
        </button>
        <button>
          <img src={comment} alt="comment" />
        </button>
      </div>
    );
  }
}

export default Reactions;
