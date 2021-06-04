import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import ProductScreen from "./screens/ProductScreen";
import { useState } from "react";

// components

import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      {/* SideDrawer */}
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          {/* HomeScreen */}
          <Route exact path="/" component={HomeScreen} />
          {/* ProductScreen */}
          <Route exact path="/product/:id" component={ProductScreen} />
          {/* CartScreen */}
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
