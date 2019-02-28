import React from 'react';
import PropTypes from 'prop-types';


export default function MarkdownTitles({ titles }) {

  const listOfTitles = titles.map((title, i)  => {
    return <li key={i}> {title}</li>;
  });

  return (
    <ul>
      {listOfTitles}
    </ul>
  );
}

MarkdownTitles.propTypes = {
  titles: PropTypes.array.isRequired
};
