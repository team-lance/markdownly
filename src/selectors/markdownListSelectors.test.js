import { getMarkdownList } from './markdownListSelectors';

describe('markdown list selectors tests', () => {
  it('gets a list of markdowns from state', () => {
    const state = {
      markdownListReducer: {
        markdownList: [{
          markdown: '## Description\n\n### More text'
        }]
      }
    };
    const markdownList = getMarkdownList(state);
    expect(markdownList).toEqual(
      [{ markdown: '## Description\n\n### More text' }]
    );
  });
});
