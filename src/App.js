import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Menus from "./menu/menus";
import Menu from "./menu/menu";
import Navbar from "./common/navbar";
import Login from "./auth/login";
import Register from "./auth/register";
import NotFound from "./common/not-found";
import UserList from "./auth/userList";
import Users from "./user/users";

import Product from "./product/product";
import FormikContainer from "./formik-element/FormikContainer";
import Registration from "./auth/Registration";
import Roles from "./auth/Roles";
import Modalform from "./auth/Modalform";
import addProduct from "./auth/addProduct";
import Header from "./theme/Header";
import Footer from "./theme/Footer";
import Banner from "./theme/Banner";
import Charecteristics from "./theme/Charecteristics";
import Deals from "./theme/Deals";
import PopularCatg from "./theme/PopularCatg";
import Banner2 from "./theme/Banner2";
import NewArrival from "./theme/NewArrival";
import BestSeller from "./theme/BestSeller";
import Adverts from "./theme/Adverts";
import Trends from "./theme/Adverts";
import Reviews from "./theme/Reviews";

// import Home from "./home/home";

class App extends Component {
  state = {
    token: "",
  };

  handleLogin = () => {
    console.log("i am called");
    let token = localStorage.getItem("token");
    this.setState({ token });
  };

  handleLogout = () => {
    localStorage.clear();
    this.setState({ token: null });
    window.location = "http://localhost:3000/home";
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Banner />
        <Charecteristics />
        <Deals />
        <PopularCatg />
        <Banner2 />
        <NewArrival />
        <BestSeller />
        <Trends />
        <Reviews />
        <Footer />
        {/* <Navbar handleLogout={this.handleLogout} token={this.state.token} /> */}
        <main className="content">
          {/* <Switch>
            <Route path="/menus" component={Menus} />
            <Route path="/menu" component={Menu} />

            <Route path="/login"
              render={props => <Login {...props} handleLogin={this.handleLogin} some="jjj"
                handleLogout={this.handleLogout} />} />

            <Route path="/register" component={Registration} />
            <Route path="/addProduct" component={addProduct} />
            <Route path="/users" component={Users} />
            <Route path="/modal-form" component={Modalform} />
            <Route path="/product" component={FormikContainer} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch> */}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
