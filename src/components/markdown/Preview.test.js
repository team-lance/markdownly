import React from 'react';
import { shallow } from 'enzyme';
import Preview from './Preview';

describe('Preview', () => {
  it('matches a snapshot', () => {
    const markdown = '## Some markdown text\n\n### Some description text';
    const wrapper = shallow(
      <Preview markdown={markdown}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
