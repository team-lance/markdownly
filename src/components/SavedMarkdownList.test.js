import React from 'react';
import { shallow } from 'enzyme';
import SavedMarkdownList from './SavedMarkdownList';

describe('SavedMarkdownList', () => {
  it('matches a snapshot', () => {
    const strings = ['title1', 'title2'];
    const deleteMarkdown = jest.fn();
    const wrapper = shallow(
      <SavedMarkdownList titles={strings}
        deleteMarkdown={deleteMarkdown}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
