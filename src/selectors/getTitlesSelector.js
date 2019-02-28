export const getTitles = state => {
  return state.markdownListReducer.markdownList.map(markdown => {
    return markdown.title; 
  });
};

