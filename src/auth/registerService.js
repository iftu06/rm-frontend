import axios from "axios";
import React, { Component } from "react";

class RegisterService extends Component {
  url = "localhost:8080/register";

  constructor() {
    super();
  }

  register(userData) {
    return axios.post(this.url, userData);
  }
}

export default new RegisterService();
