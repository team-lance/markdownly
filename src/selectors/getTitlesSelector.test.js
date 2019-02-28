import { getTitles } from './getTitlesSelector';


describe('markdown list title selector tests', () => {
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

