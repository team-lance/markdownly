import React, { PureComponent } from 'react';
import SaveAs from '../components/SaveAs';
import store from '../store';
import { createMarkdown } from '../actions/markdownListActions';
import { getMarkdown } from '../selectors/markdownSelectors';

export default class SaveAsForm extends PureComponent {
  state = {
    markdownList: [],
    title: ''
  };

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const state = store.getState();
      const markdown = getMarkdown(state);
      this.setState({ markdown });
    });
  }

  componentWillUnmount() {
    if(this.unsubscribe) {
      this.unsubscribe();
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onSave = event => {
    event.preventDefault();
    const { title, markdown } = this.state;
    store.dispatch(createMarkdown({ title, markdown }));
  };

  render() {
    const { title } = this.state;
    return (
      <SaveAs handleChange={this.handleChange}
        onSave={this.onSave}
        title={title}
      />
    );
  }
}
