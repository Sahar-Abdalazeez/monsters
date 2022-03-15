import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import { CardList } from "./components/card-list/card-list.component";
import { Line } from "react-chartjs-2";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
} from "@progress/kendo-react-charts";
import "hammerjs";
const categories = ["January", "February", "March", "April", "May"];
// const state = {
//   labels: ["January", "February", "March", "April", "May"],
//   datasets: [
//     {
//       label: "Rainfall",
//       fill: false,
//       lineTension: 0.5,
//       backgroundColor: "rgba(75,192,192,1)",
//       borderColor: "rgba(0,0,0,1)",
//       borderWidth: 2,
//       data: [65, 59, 80, 81, 56],
//     },
//   ],
// };
const ChartContainer = () => (
  <Chart>
    <ChartCategoryAxis>
      <ChartCategoryAxisItem categories={categories} />
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem type="verticalLine" data={[1, 2, 3, 5]} />
      <ChartSeriesItem type="verticalLine" data={[-1, -2, -3, -5]} />
    </ChartSeries>
  </Chart>
);

// ReactDOM.render(<ChartContainer />, document.querySelector('my-app'));

var LineChart = require("react-chartjs").Line;

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((user) => {
        this.setState({ monsters: user });
      })
    );
  }

  render() {
    return (
      <div className="App">
        <ChartContainer />
        {/* <div>
          {/* <Line
            data={[]}
            // options={{
            //   title: {
            //     display: true,
            //     text: "Average Rainfall per month",
            //     fontSize: 20,
            //   },
            //   legend: {
            //     display: true,
            //     position: "right",
            //   },
            // }}
          /> 
      </div> */}
        {/* <LineChart data={[1, 2, 3, 4, 5, 100]} width="600" height="250" /> */}
        {/* <input
          type="search"
          placeholder="search monsters"
          onChange={(e) =>
            this.setState(
              { searchField: e.target.value }
              //this is adding callback in order to get the text immeditely without delay problems
              //   , () => {
              //   console.log(this.state);
              // }
            )
          }
        />
        <CardList monsters={this.state.monsters} /> */}
      </div>
    );
  }
}
export default App;
