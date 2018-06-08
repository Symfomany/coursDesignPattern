import React, { Component } from "react";
import Emitter from "./emitter";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nb: 10
    };
    this.augmenter = this.augmenter.bind(this);
  }
  augmenter() {
    this.setState({
      nb: this.state.nb + 5
    });

    if (this.state.nb > 50) {
      Emitter.emit("alerter");
    }
  }

  render() {
    return <button onClick={this.augmenter}> Augmenter {this.state.nb}</button>;
  }
}

export default Button;
