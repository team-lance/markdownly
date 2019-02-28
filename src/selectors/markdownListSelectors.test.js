import { 
  getMarkdownList,
  getTitles
} from './markdownListSelectors';

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

  it('gets all markdown titles from state', () => {
    const state = {
      markdownListReducer: {
        markdownList: [{ title: 'title', markdown: 'some body' }, { title: 'title2', markdown: 'some body2' }]
      }
    };

    const markdownTitles = getTitles(state);

    expect(markdownTitles).toEqual(['title', 'title2']);
  });
});
