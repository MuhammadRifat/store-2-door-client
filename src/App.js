import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import Admin from "./components/Admin/Admin";
import CheckOut from "./components/CheckOut/CheckOut";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Orders from "./components/Orders/Orders";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Shipment from "./components/Shipment/Shipment";

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Header/>
      <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <PrivateRoute path="/admin">
            <Admin/>
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/checkout/:productId">
            <CheckOut/>
          </PrivateRoute>
          <Route path="/shipment">
            <Shipment/>
          </Route>
          <PrivateRoute path="/orders">
            <Orders/>
          </PrivateRoute>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
