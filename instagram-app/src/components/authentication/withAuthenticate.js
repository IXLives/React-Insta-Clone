import React from "react";

const withAuthenticate = (App) =>
  class extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    render() {
      return <App />;
    }
  };

export default withAuthenticate;