import React from 'react';
import PropTypes from 'prop-types';


export default function MarkdownList({ markdownList }) {

  const listOfMarkdowns = markdownList.map((markdown, i)  => {
    return <li key={i}> {markdown.title}</li>;
  });

  return (
    <ul>
      {listOfMarkdowns}
    </ul>
  );
}

MarkdownList.propTypes = {
  markdownList: PropTypes.array.isRequired
};
