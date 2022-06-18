import React, { Component } from "react";
import Joi from "@hapi/joi";
import Input from "../common/input";
import Checkbox from "../common/checkbox";

class Form extends Component {
  state = { data: {}, errors: {} };

  validate = () => {
    const { error } = this.schema.validate(this.state.data);
    if (!error) return null;
    const errors = {};
    for (let e of error.details) {
      errors[e.path[0]] = e.message;
    }
    console.log(errors);
    return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    if (this.schemaObj[name]) {
      const schema = Joi.object({ [name]: this.schemaObj[name] });
      const { error } = schema.validate(obj);
      return error ? error.details[0].message : null;
    } else {
      return null;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) {
      return;
    }
    this.postData();
  };

  handleData = ({ currentTarget: input }) => {
    const { data, errors } = { ...this.state };
    const errMessage = this.validateProperty(input);
    if (errMessage) {
      errors[input.name] = errMessage;
    } else {
      delete errors[input.name];
    }
    data[input.name] = input.value;
    this.setState({ data });
  };

  handleCheckbox = ({ currentTarget: checkbox }) => {
    console.log(checkbox);
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(name, label, type) {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        type={type}
        label={label}
        value={data[name]}
        onChange={this.handleData}
        error={errors[name]}
      />
    );
  }

  renderCheckbox(name, label, type, id, value, isChecked) {
    // const { data, errors } = this.state;

    return (
      <Checkbox
        name={name}
        label={label}
        type={type}
        id={id}
        key={id}
        value={value}
        checked={isChecked}
        onChange={this.handleCheckbox}
      />
    );
  }
}

export default Form;
