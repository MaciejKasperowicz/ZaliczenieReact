import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import CatalogPage from "./Components/CatalogPage/CatalogPage";
import AboutPage from "./Components/AboutPage/AboutPage";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/catalog" component={CatalogPage} />
          <Route path="/about" component={AboutPage} />
          <Route render={() => <h2>Not found</h2>}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
