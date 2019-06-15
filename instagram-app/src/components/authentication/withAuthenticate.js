import React from "react";
import dummyData from '../../dummy-data';

const withAuthenticate = App =>
  class extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        profiles: []
      }
    }
    render() {
      return <App />;
    }
  };

export default withAuthenticate;