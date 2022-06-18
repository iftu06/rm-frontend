import React from "react";

const Checkbox = ({ name, label, type, id, value, checked, onChange }) => {
  return (
    <div className="form-check form-check-inline">
      <input
        type={type}
        name={name}
        id={id}
        className="form-check-input"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
