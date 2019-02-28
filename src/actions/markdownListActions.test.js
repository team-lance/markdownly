import { createMarkdown, CREATE_MARKDOWN } from './markdownListActions';

describe('markdown list action tests', () => {
  it('creates an action that updates the markdown list', () => {
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
});
