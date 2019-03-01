import React from 'react';
import PropTypes from 'prop-types';
import styles from './SavedMarkdownList.css';

export function MarkdownTitles({ titles }) {
  const listOfTitles = titles.map((title, i)  => {
    return <li key={i}>{title}</li>;
  });

  return (
    <ul className={styles.list}>
      {listOfTitles}
    </ul>
  );
}

MarkdownTitles.propTypes = {
  titles: PropTypes.array.isRequired
};
