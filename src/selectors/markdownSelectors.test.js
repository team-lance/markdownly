import { getMarkdown } from './markdownSelectors';

describe('markdown selectors tests', () => {
  it('test the get single markdown selector', () => {
    const state = {
      markdown: 'some string'
    };
    const markdown = getMarkdown(state);
    expect(markdown).toEqual('some string');
  });

  it('it will return an empty state if state is empty', () => {
    const state = {
      markdown: ''
    };
    const markdown = getMarkdown(state);
    expect(markdown).toEqual('');
  });
});
