import React from "react";
import dummyData from "./dummy-data";

import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      profiles: dummyData
    };
  }

  render() {
    return (
      <div className = 'App'>
        <SearchBar />
        <PostContainer profiles = {this.state.profiles} />
      </div>
    )
  }
}

export default App;
