import reducer from './markdownReducer';

describe('markdown reducer tests', () => {

  it('handles an update markdown action', () => {
    const state = {
      markdown: {
        text: ''
      }
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
