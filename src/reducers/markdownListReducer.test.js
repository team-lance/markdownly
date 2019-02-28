import reducer from './markdownListReducer';

describe('markdown list reducers tests', () => {
  it('handles adding markdown to the markdown list', () => {
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
