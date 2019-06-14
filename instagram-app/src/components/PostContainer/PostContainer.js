import React from "react";
import likePic from "../../assets/likePic.png";
import comment from "../../assets/comment.png";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";
import PropTypes from "prop-types";

function PostContainer(props) {
  return (
    <div className="userPosts">
      {props.profiles.map(profile => {
        return (
          <div className="post">
            <div className="header">
              <img src={profile.thumbnailUrl} alt="thumbnail" />
              <h3>{profile.username}</h3>
            </div>
            <img src={profile.imageUrl} alt="image" className="mainImage" />
            <div className="lowerContent">
              <div className="reactions">
                <img src={likePic} alt="likePic" />
                <img src={comment} alt="comment" />
              </div>
              <div className="likes">
                <p>
                  <strong>{profile.likes}</strong> likes
                </p>
              </div>
              <CommentSection comments={profile.comments} addNewComment = {props.addNewComment} postId = {profile.id}/>
            </div>
          </div>
        );
      })}
    </div>
  );
}

PostContainer.defaultProps = {
  profiles: [{
    id: "a",
    username: "philzcoffee",
    thumbnailUrl:
      "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg",

    imageUrl:
      "https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg",
    likes: 400,
    timestamp: "July 17th 2017, 12:42:40 pm",
    comments: [
      {
        id: 1,
        username: "philzcoffee",
        text:
          "We've got more than just delicious coffees to offer at our shops!"
      },
      {
        id: 2,
        username: "biancasaurus",
        text: "Looks delicious!"
      },
      {
        id: 3,
        username: "martinseludo",
        text: "Can't wait to try it!"
      }
    ]
  }
  ]
};

PostContainer.propTypes = {
    profiles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            username: PropTypes.string,
            thumbnailUrl: PropTypes.string,
            imageUrl: PropTypes.string,
            likes: PropTypes.number,
            timestamp: PropTypes.string,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number,
                    username: PropTypes.string,
                    text: PropTypes.string,
                })
            )
        })
    )
};

export default PostContainer;
