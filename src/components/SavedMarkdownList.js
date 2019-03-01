import React from 'react';
import PropTypes from 'prop-types';
import styles from './SavedMarkdownList.css';

function SavedMarkdownList({ titles, deleteMarkdown }) {
  const listOfTitles = titles.map((title, i)  => {
    return <li key={i}>
      {title.title}
      <button onClick={deleteMarkdown.bind(null, title.id)}>DELETE</button>
    </li>;
  });

  return (
    <ul className={styles.list}>
      {listOfTitles}
    </ul>
  );
}

SavedMarkdownList.propTypes = {
  titles: PropTypes.array.isRequired,
  deleteMarkdown: PropTypes.func.isRequired
};

export default SavedMarkdownList;
