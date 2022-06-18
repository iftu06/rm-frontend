import React, { Component } from "react";
import Pagination from "../common/pagination";
import UserTable from "./userTable";
import _ from "lodash";
import axios from "axios";

const apiEndPoint = "http://localhost:8095/users";
class UserList extends Component {
  state = {
    pagSize: 4,
    currentPage: 1,
    users: [
      {
        userName: "iftekhar",
        firstName: "iftekhar",
        lastName: "uddin",
        mobileNo: "01816665456",
      },
    ],
    sortColumn: { path: "name", order: "asc" },
  };

  componentDidMount() {
    axios.get(apiEndPoint).then((response) => {
      console.log(response.data);
      let users = response.data;
      this.setState({ users });
    });
  }

  getUser = () => {};

  handleDelete = (user) => {
    const users = this.state.users.filter((u) => u.id != user.id);
    this.setState({
      users: users,
    });
  };

  handleEdit = (user) => {
    console.log(user);
    let editUrl = apiEndPoint + "/" + user.id;
    axios.get(editUrl).then((user) => {
      console.log(user);
      this.setState({ user });
    });
  };

  handleSort = (path) => {
    this.setState({ sortColumn: { path, order: "asc" } });
  };

  handlePageChange = (page) => {};

  render() {
    const { length: count } = this.state.users;
    const { users, sortColumn } = this.state;
    const sorted = _.orderBy(users, [sortColumn.path], [sortColumn.order]);
    if (count == 0) return <p>There are no users</p>;
    return (
      <React.Fragment>
        <p>Total {count} users</p>
        <UserTable
          users={sorted}
          onDelete={this.handleDelete}
          onEdit={this.handleEdit}
          onSort={this.handleSort}
        />
        <Pagination
          items={count}
          pagSize={this.state.pagSize}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default UserList;
