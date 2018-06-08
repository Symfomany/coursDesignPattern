import React, { Component } from "react";
import PropTypes from "prop-types";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p style={{ color: this.context.theme.fg }}>Je suis la vue Home</p>
        <p> Langues: {this.context.user.langues}</p>
      </div>
    );
  }
}

Home.contextTypes = {
  theme: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default Home;
