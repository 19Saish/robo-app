import React, { Component } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import "./App.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfeild: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onsearchChange = (event) => {
    this.setState({ searchfeild: event.target.value });
  };
  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfeild.toLowerCase());
    });

    if (this.state.robots.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 style={{textAlign:"center"}}>Robo Friends</h1>
          <SearchBox searchChange={this.onsearchChange} />
          {/* <Scroll> */}
            <CardList robots={filteredRobots} />;
          {/* </Scroll> */}
        </div>
      );
    }
  }
}

export default App;
