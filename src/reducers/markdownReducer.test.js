import reducer from './markdownReducer';

describe('markdown reducers tests', () => {
  
  it('handles an update markdown action', () => {
    const state = {
      markdown: ''
    };
    const updatedState = reducer(state, {
      type: 'UPDATE_MARKDOWN',
      payload: {
        text:'UPDATED HELLO WORLD'
      }
    });
    expect(updatedState).toEqual({
      markdown: { 
        text: 'UPDATED HELLO WORLD'
      } 
    });
  });
});
