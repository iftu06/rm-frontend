import React, { Component } from "react";
class Counter extends Component {
  state = { count: 1 };

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  formatCount() {
    const { count } = this.state;
    return count == 0 ? <h1>Zero</h1> : count;
  }
  render() {
    let classes = this.getBadgeClasses();
    return (
      <React.Fragment>
        <span className={classes}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.incrementCount}
        >
          Increment
        </button>

        <button
          className="btn btn-secondary btn-sm"
          onClick={this.decrementCount}
          disabled={this.state.count == 0}
        >
          Decrement
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count == 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
