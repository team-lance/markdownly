import React from 'react';
import PropTypes from 'prop-types';
import './SaveAs.css';

export default function SaveAs({ title, onSave, handleChange }) {
  return (
    <form onSubmit={onSave}>
      <label>
        <span>Save As:</span>
        <input type='text' name='title' value={title} onChange={handleChange}/>
      </label>
      <button>Save</button>
    </form>
  );
}

SaveAs.propTypes = {
  onSave: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};
