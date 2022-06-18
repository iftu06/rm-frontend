import React, { Component } from "react";
import Joi from "@hapi/joi";
import Form from "../common/form";
import axios from "axios";
import RegisterService from "./registerService";

const apiEndPoint = "http://localhost:8095/registration";

class Register extends Form {
  state = {
    data: {
      userName: "",
      password: "",
      mobileNo: "",
      email: "",
      roles: [],
    },
    errors: {},
  };

  schemaObj = {
    userName: Joi.string().required().label("UserName"),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .label("Password"),
    mobileNo: Joi.string().required().label("Mobile No"),
    email: Joi.string().required().label("Email"),
    
  };

  schema = Joi.object(this.schemaObj)
    .with("userName", "password")
    .options({ abortEarly: false });

  componentDidMount() {
    let roles = "http://localhost:8095/roles";
    axios.get(roles).then((apiResponse) => {
      let allRoles = apiResponse.data;
      allRoles.map((role) => (role["isChecked"] = false));
      this.setState({ roles: allRoles });
    });
  }

  getUser = () => {};

  handleCheckbox = ({ currentTarget: input }) => {
    let roles = [...this.state.roles];
    roles.forEach((role) => {
      if (role["id"] == input.value) {
        role["isChecked"] = input.checked;
      }
    });
    this.setState({ roles });
  };

  postData = async () => {
    let errors = {};

    let roles = [...this.state.roles];
    let selectedRoles = [];

    roles
      .filter((role) => role.isChecked)
      .forEach((role) => {
        delete role.isChecked;
        selectedRoles.push(role);
      });

    this.setState({ roles: selectedRoles });
    console.log(this.state.roles);

    // axios.post(apiEndPoint, this.state.data).then((apiResponse) => {
    //   const status = apiResponse.data.status;
    //   if (status == "success") {
    //     this.props.history.push("/register");
    //     let data = { userName: "", password: "", mobileNo: "", email: "" };
    //     this.setState({ data });
    //   } else if (status == "error") {
    //     apiResponse.data.response.forEach(function (errorResp) {
    //       errors[errorResp["field"]] = errorResp["message"];
    //     });
    //     this.setState({ errors });
    //   }
    // });
  };

  deleteUser = () => {};

  render() {
    return (
      <React.Fragment>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("userName", "UserName", "text")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("mobileNo", "Mobile No", "text")}
          {this.renderInput("email", "Email", "text")}
          <label style={{ marginRight: 10 }}>Roles: </label>
          {this.state.roles &&
            this.state.roles.map((role) => {
              return this.renderCheckbox(
                "role",
                role.name,
                "checkbox",
                role.name,
                role.id,
                role.isChecked
              );
            })}
          <br />
          {this.renderButton("Register")}
        </form>
      </React.Fragment>
    );
  }
}

export default Register;
