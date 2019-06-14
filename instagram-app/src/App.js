import React from "react";
import dummyData from "./dummy-data";

import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      profiles: []
    };
  }

  addNewComment = (comment, postId) => {
    const newState = [];
    this.state.profiles.forEach(id => {
      if (id.id == postId) {
        id.comments.push(comment);
        console.log(this.state.profiles);
      }
    });
    this.state.profiles.forEach(id => {
      newState.push(id);
    });
    console.log(newState);
    this.setState({ profiles: newState });
  };

  componentDidMount() {
    this.setState({ profiles: dummyData });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />

        <PostContainer
          profiles={this.state.profiles}
          addNewComment={this.addNewComment}
        />
      </div>
    );
  }
}

export default App;
