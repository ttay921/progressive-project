import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import DukeTable from "./components/DukeTable";
import UNCTable from "./components/UNCTable";
import WakeMedTable from "./components/WakeMedTable";
import BubbleChart from "./components/BubbleChart";
import GroupChart from "./components/GroupChart";

/** comment
 * home page
 * @return {any}
*/
function Index() {
  return <div><h2>Home</h2></div>;
}
/** links to
 * other pages
 * @return {any}
*/
class App extends Component {
  /** start application here
 * the route of our knowledge
 * @return {any}
*/
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/chart/">Bubble Chart</Link>
              </li>
              <li>
                <Link to="/chart/group/">Grouped Chart</Link>
              </li>
              <li>
                <Link to="/data/duke/">Duke DRG</Link>
              </li>
              <li>
                <Link to="/data/unc/">UNC DRG</Link>
              </li>
              <li>
                <Link to="/data/wakemed/">Wake Med DRG</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Index} />
          <Route path="/chart" exact component={BubbleChart} />
          <Route path="/chart/group/" exact component={GroupChart} />
          <Route path="/data/duke/" exact component={DukeTable} />
          <Route path="/data/unc/" exact component={UNCTable} />
          <Route path="/data/wakemed/" exact component={WakeMedTable} />
        </div>
      </Router>
    );
  }
}


export default App;
