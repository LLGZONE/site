import React from 'react';
import classnames from 'classnames';
import { Editor, EditorState } from 'draft-js';
export interface EditorCoreProps {
  className?: string;
  prefix?: string;
  readOnly?: boolean;
}
export interface EditorCoreState {
  editorState?: EditorState;
}
export default class EditorCore extends React.Component<
  EditorCoreProps,
  EditorCoreState
> {
  constructor(props) {
    super(props);
  }
  onChange = editorState => {
    this.setState({
      editorState
    });
  };
  render() {
    const { className, prefix, readOnly } = this.props;
    const { editorState } = this.state;
    const editorCls = classnames(prefix, {
      readOnly,
      [className]: !!className
    });
    return (
      <div className={editorCls}>
        <Editor
          placeholder={'请输入内容'}
          editorState={editorState}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
