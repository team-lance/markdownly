import reducer from './markdownListReducer';

describe('markdown list reducers tests', () => {
  it('handles an add markdown to markdown list action', () => {
    const state = {
      markdownList: []
    };
    const updatedState = reducer(state, {
      type: 'CREATE_MARKDOWN',
      payload: {
        markdown: '## Description\n\n### More text'
      }
    });
    expect(updatedState).toEqual({
      markdownList: [{
        markdown: '## Description\n\n### More text' 
      }]
    });
  });
});
