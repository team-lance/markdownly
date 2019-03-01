import { 
  createMarkdown,
  CREATE_MARKDOWN,
  deleteMarkdown,
  DELETE_MARKDOWN
} from './markdownListActions';

describe('markdown list action tests', () => {
  it('appends markdown to a list', () => {
    const action = createMarkdown({
      markdown: '## Description\n\n### More text'
    });

    expect(action).toEqual({
      type: CREATE_MARKDOWN, 
      payload: {
        markdown: '## Description\n\n### More text'
      }
    });
  });

  it('deletes a markdown from the list', () => {
    const action  = deleteMarkdown('someID');

    expect(action).toEqual({
      type: DELETE_MARKDOWN, 
      payload:'someID'
    });
  });
});
