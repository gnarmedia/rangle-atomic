import React, { Component } from "react";

import CardList from "./components/organisms/CardList";

import "./App.css";

const profiles = [
  {
    id: 1,
    selected: false,
    name: "Jane React",
    description: "Coolest person alive"
  },
  {
    id: 2,
    selected: false,
    name: "John React",
    description: "Raddest dude ever"
  },
  {
    id: 3,
    selected: false,
    name: "Jill React",
    description: "Baddest girl around"
  }
];

class App extends Component {
  render() {
    return <CardList cards={profiles} />;
  }
}

export default App;
