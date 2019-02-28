import React from 'react';
import PropTypes from 'prop-types';

export default function SaveAs({ title, onSave, handleChange }) {
  return (
    <form onSubmit={onSave}>
      <label>
        Save As:
        <input type='text' name='title' value={title} onChange={handleChange}/>
      </label>
      <button>Button</button>
    </form>
  );
}

SaveAs.propTypes = {
  onSave: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};
