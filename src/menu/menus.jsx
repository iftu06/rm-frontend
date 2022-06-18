import React, { Component } from "react";
import Pagination from "../common/pagination";

class Menus extends Component {
  state = {
    pagSize: 4,
    menus: [{ id: 1, name: "Fish", price: 20, category: "Lunch" }]
  };

  handleDelete = menu => {
    const menus = this.state.menus.filter(m => m.id != menu.id);
    this.setState({
      menus: menus
    });
  };

  handlePageChange = page => {};

  render() {
    const { length: count } = this.state.menus;
    if (count == 0) return <p>There are no menus</p>;
    return (
      <React.Fragment>
        <p>Total {count} menus</p>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Image</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.menus.map(menu => (
              <tr key={menu.id}>
                <td>{menu.name}</td>
                <td>{menu.price}</td>
                <td>{menu.category}</td>
                <td></td>
                <td>
                  <button
                    onClick={() => this.handleDelete(menu)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          items={count}
          pagSize={this.state.pagSize}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Menus;
