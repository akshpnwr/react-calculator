import classes from "./App.module.css";
import { Component } from "react";
import Layout from "./containers/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout />
      </div>
    );
  }
}

export default App;
