export const CREATE_MARKDOWN = 'CREATE_MARKDOWN';
export const DELETE_MARKDOWN = 'DELETE_MARKDOWN';

export const createMarkdown = markdown => ({
  type: CREATE_MARKDOWN,
  payload: markdown
});

export const deleteMarkdown = id => ({
  type: DELETE_MARKDOWN,
  payload: id
});

