import React from 'react';
import { shallow } from 'enzyme';
import Editor from './Editor';

describe('Editor', () => {
  it('matches a snapshot', () => {
    const markdown = '## Some markdown text';
    const updateMarkdown = jest.fn();
    const wrapper = shallow(
      <Editor markdown={markdown}
        updateMarkdown={updateMarkdown}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
