import axios from "axios";
import React, { Component } from "react";

class LoginService extends Component {
  url = "localhost:8080/login";

  constructor() {
    super();
  }

  login(loginRequest) {
    return axios.post(this.url, loginRequest);
  }


}

export default LoginService;
