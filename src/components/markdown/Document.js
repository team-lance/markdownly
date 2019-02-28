import React, { PureComponent } from 'react';
import Preview from './Preview';
import Editor from './Editor';
import styles from './Document.css';
import store from '../../store';
import { updateMarkdown } from '../../actions/markdownActions';
import { getMarkdown } from '../../selectors/markdownSelectors';
import SaveAsForm from '../../containers/SaveAsForm';


export default class Document extends PureComponent {
  state = {
    markdown: '',
    unsubscribe: null
  };

  updateState = () => {
    const currentReduxState = store.getState();
    const markdown = getMarkdown(currentReduxState);
    this.setState({ markdown });
  };
  

  componentDidMount() {
    this.updateState();
    const unsubscribe = store.subscribe(() => {
      this.updateState();
    });
    this.setState({ unsubscribe });
  }

  updateMarkdown = ({ target }) => {
    store.dispatch(updateMarkdown(target.value));
  };

  componentWillUnmount() {
    this.state.unsubscribe();
  }


  render() {
    const { markdown } = this.state;
    return (
      <>
        <div className={styles.Document}>
          <SaveAsForm markdown={markdown}/>
          
          <Editor markdown={markdown} updateMarkdown={this.updateMarkdown} />
          <Preview markdown={markdown} />
        </div>
      </>
    );
  }
}
