import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
//turning our component to functional componrnt
const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([monsters]);
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
  //to get the data from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((users) => {
        setMonsters(users);
      })
    );
  }, []);

  useEffect(() => {
    // filtered array to pick monsters that starts with the searches value
    const newFilteredMonsters = monsters?.filter((monster) =>
      monster?.name.toLowerCase().includes(searchField?.toLowerCase())
    );
    console.log("rerender");
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder="Search Monster " handleChange={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
//       res.json().then((user) => {
//         this.setState({ monsters: user });
//       })
//     );
//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     //this is same as monsters = this.state.monsters and same for searched fields

//     //filtered array to pick monsters that starts with the searches value
//     const filteredMonsters = monsters?.filter((monster) =>
//       monster?.name.toLowerCase().includes(searchField?.toLowerCase())
//     );
//     return (
//       <div className="App">
//         <h1>Monsters Rolodex</h1>
//         {/* <SearchBox
//           placeholder="Search Monster "
//           handleChange={(e) =>
//             this.setState(
//               { searchField: e.target.value }
//               //this is adding callback in order to get the text immeditely without delay problems
//               //   , () => {
//               //   console.log(this.state);
//               // }
//             )
//           }
//         /> */}

//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }
export default App;
