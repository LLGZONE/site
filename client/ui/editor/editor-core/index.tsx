import React from 'react';
import { Editor, EditorState, ContentState } from 'draft-js';
import classnames from 'classnames';
import Toolbar from '../toolbar';
import 'draft-js/dist/Draft.css';
import decorators from '../decorators';
import { html2draft, draft2html } from '../util';

export interface EditorCoreProps {
  className?: string;
  prefix: string;
  readOnly?: boolean;
  defaultValue?: EditorState;
  value: EditorState | string;
  toolbars?: string[][];
  plugins?: any[];
}
export interface EditorCoreState {
  editorState?: EditorState;
  plugins: any[];
}
export default class EditorCore extends React.Component<
  EditorCoreProps,
  EditorCoreState
> {
  static defaultProps = {
    prefix: 'tui-editor',
    className: '',
    defaultValue: '',
    toolbars: [],
    plugins: []
  };
  init_value;
  constructor(props) {
    super(props);
    this.init_value = this.inControll
      ? this.props.value
      : this.props.defaultValue;
    this.state = {
      editorState: this.init_state(this.init_value),
      plugins: this.init_plugins()
    };
    if (this.inControll) {
      console.warn('编辑器处于受控模式，Be Careful');
    }
  }
  private get inControll() {
    if (typeof this.props.value !== 'undefined') {
      return true;
    } else {
      return false;
    }
  }
  private init_plugins() {
    const { plugins } = this.props;
    return plugins;
  }
  private init_state(init_value): EditorState {
    if (init_value instanceof EditorState) {
      return init_value;
    } else {
      const contentState = html2draft(init_value);
      return EditorState.createWithContent(contentState, decorators);
    }
  }
  onChange = editorState => {
    const curContentState = this.setState({
      editorState
    });
  };
  /**
   * 重置编辑器
   */
  reset() {
    this.setState({
      editorState: this.init_state(this.init_value)
    });
  }
  render() {
    const { className, prefix, readOnly, toolbars } = this.props;
    const { editorState, plugins } = this.state;
    const editorcls = classnames(prefix, {
      readOnly,
      [className]: !!className
    });
    return (
      <div className={editorcls}>
        <Toolbar
          plugins={plugins}
          toolbars={toolbars}
          editorState={editorState}
          onChange={this.onChange}
        />
        <Editor
          placeholder={'请输入内容'}
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
