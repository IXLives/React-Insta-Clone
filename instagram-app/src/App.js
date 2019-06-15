import React from "react";
import dummyData from "./dummy-data";

import SearchBar from "./components/SearchBar/SearchBar";
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/authentication/withAuthenticate';

import "./App.css";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      profiles: []
    };
  }


  filterBySearch = search => {
    const newState = this.state.profiles.filter(
      profile => profile.username === search
    );
    this.setState({ profiles: newState });
  };

  addNewComment = (comment, postId) => {
    const newState = [];
    this.state.profiles.forEach(id => {
      if (id.id === postId) {
        id.comments.push(comment);
        //console.log(this.state.profiles);
      }
    });
    this.state.profiles.forEach(id => {
      newState.push(id);
    });
    //console.log(newState);
    this.setState({ profiles: newState });
  };

  likePost = post => {
    const newState = [];
    this.state.profiles.forEach(id => {
      if (id.id === post) {
        id.likes += 1;
        //console.log(id.likes);
      }
    });
    this.state.profiles.forEach(id => {
      newState.push(id);
    });
    this.setState({ profiles: newState });
  };

  componentDidMount() {
    this.setState({ profiles: dummyData });
  }

  render() {
    return (
      <div className="App">
        <SearchBar filterBySearch={this.filterBySearch} />

        <PostsPage
         profiles={this.state.profiles}
         addNewComment={this.addNewComment}
         likePost={this.likePost}
        />
      </div>
    );
  }
}

console.log(ComponentFromWithAuthenticate);

export default App;
