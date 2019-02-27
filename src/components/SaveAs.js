import React from 'react';
import PropTypes from 'prop-types';

export default function SaveAs({ text, onSave }) {
  return (
    <form onSubmit={onSave}>
      <label>
        Save As:
        <input type='text' name='text' value={text} />
      </label>
      <button>Button</button>
    </form>
  );
}

SaveAs.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};
