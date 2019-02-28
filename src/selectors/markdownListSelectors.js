export const getMarkdownList = state => {
  return state.markdownListReducer.markdownList;
};

export const getTitles = state => {
  return state.markdownListReducer.markdownList.map(markdown => {
    return markdown.title; 
  });
};


