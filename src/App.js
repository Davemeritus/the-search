import React, { Component } from "react";
import logo from "./logo.svg";
import SearchBox from "./SearchBox";
import DogList from "./DogList";
import "./App.css";

//const App = () => {
// [dogs, setDogs] = useState([
//  {name:"Max", breed: "Lab"},
//  {name:"Sparky", breed: "German Sherperd"},
// {name:"Rex", breed: "Boxer"},
//// {name:"Sally", breed: "Poodle"},
// {name:"George", breed: "Pitbull"}
//])

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [
        { name: "Max", breed: "Lab" },
        { name: "Sparky", breed: "German Sherperd" },
        { name: "Rex", breed: "Boxer" },
        { name: "Sally", breed: "Poodle" },
        { name: "George", breed: "Pitbull" },
      ],
      searchDog: "",
    };
  }
  handleInput = (e) => {
    this.setState({ searchDog: e.target.value });
  };
  render() {
    let filteredDogs = this.state.dogs.filter((dog) => {
      return dog.name
        .toLowerCase()
        .includes(this.state.searchDog.toLowerCase());
    });
    return (
      <div className="App">
        <h1> Dog Images</h1>
        <SearchBox handleInput={this.handleInput} />
        <DogList filteredDogs={filteredDogs} />
      </div>
    );
  }
}

export default App;
