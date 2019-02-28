import { getMarkdown } from './markdownSelectors';

describe('markdown selectors tests', () => {
  it('gets markdown text from state', () => {
    const state = {
      markdownReducer: {
        markdown: 'some string'
      }
    };
    const markdown = getMarkdown(state);
    expect(markdown).toEqual('some string');
  });

  it('gets empty markdown text', () => {
    const state = {
      markdownReducer: {
        markdown: ''
      }
    };
    const markdown = getMarkdown(state);
    expect(markdown).toEqual('');
  });
});
