import React, { Component } from "react";

import PropTypes from "prop-types";

class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Fournir le contexte et les données dans le context
  getChildContext() {
    return {
      theme: {
        bg: "#eee",
        fg: "#aaa"
      },
      user: {
        id: 123,
        prenom: "Julien",
        langues: "fr"
      }
    };
  }

  render() {
    // children : permet d'appeler tout les composants enfants dans ma vue
    return <div>{this.props.children}</div>;
  }
}

ThemeProvider.childContextTypes = {
  theme: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default ThemeProvider;
