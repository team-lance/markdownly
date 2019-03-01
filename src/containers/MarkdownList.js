import React, { PureComponent } from 'react';
import { getMarkdownList } from '../selectors/markdownListSelectors';
import SavedMarkdownList from '../components/SavedMarkdownList';
import store from '../store';
import { deleteMarkdown } from '../actions/markdownListActions';

export default class MarkdownList extends PureComponent {
    state = {
      markdownTitles: []
    };

    componentDidMount() {
      this.unsubscribe = store.subscribe(() => {
        const state = store.getState();
        const markdownTitles = getMarkdownList(state);
        this.setState({ markdownTitles });
      });
    }
    componentWillUnmount() {
      if(this.unsubscribe) {
        this.unsubscribe();
      }
    }
    delete = (id) => {
      store.dispatch(deleteMarkdown(id));
    };

    render() {
      const { markdownTitles } = this.state;
      return (
        <SavedMarkdownList
          deleteMarkdown={this.delete}
          titles={markdownTitles}
        />
      );
    }
}
