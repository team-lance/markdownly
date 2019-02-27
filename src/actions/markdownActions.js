export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';
export const updateMarkdown = text => ({
  type: UPDATE_MARKDOWN,
  payload: text
});

export const CREATE_MARKDOWN = 'CREATE_MARKDOWN';
export const createMarkdown = markdown => ({
  type: CREATE_MARKDOWN,
  payload: markdown
});
