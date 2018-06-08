import React, { Component } from "react";
import logo from "./logo.svg";
import Titre from "./Titre";
import Home from "./Home";
import Button from "./Button";
import Emitter from "./emitter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meteo: "Soleil"
    };
    this.changerMeteo = this.changerMeteo.bind(this);
    this.alerter = this.alerter.bind(this);

    Emitter.addListener("alerter", this.alerter);
  }

  alerter() {
    this.setState({
      meteo: "Canicule"
    });
  }

  changerMeteo() {
    this.setState({
      meteo: "Pluie"
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.changerMeteo}>Changer Meteo</button>
          <Titre temperature={29} meteo={this.state.meteo} />
          <Home />
          <Button />
        </header>
      </div>
    );
  }
}

export default App;
