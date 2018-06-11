import React from 'react';
import { EditorState } from 'draft-js';
import classnames from 'classnames';

export default class Toolbar extends React.Component<{
  prefix?: string;
  className?: string;
  toolbars?: string[][];
  plugins?: any[];
  editorState: EditorState;
  onChange: (EditorState) => void;
}> {
  static defaultProps = {
    prefix: 'tui-editor-toolbar',
    className: '',
    toolbars: [],
    plugins: []
  };
  pluginMap: Map<string, any>;
  constructor(props) {
    super(props);
    this.pluginMap = new Map();
    for (const plugin of props.plugins) {
      this.pluginMap.set(plugin.name, plugin);
    }
  }
  renderItem(pluginName, idx) {
    const { onChange } = this.props;
    const plugin = this.pluginMap.get(pluginName);
    if (plugin && plugin.component) {
      // element
      if (React.isValidElement(plugin.component)) {
        return React.cloneElement(plugin.component, {
          key: `tootl-item-${idx}`
        });
      } else {
        // native component
        if (typeof plugin.component === 'undefined') {
          return <plugin.component key={`toolbar-item-${idx}`} />;
        } else {
          return (
            <plugin.component
              key={`toolbar-item-${idx}`}
              editorState={this.props.editorState}
              onChange={onChange}
            />
          );
        }
        // composite component
      }
    } else {
      console.warn(`${pluginName} 不存在`);
      return null;
    }
  }
  render() {
    const { toolbars, prefix, className } = this.props;
    const cls = classnames(prefix, {
      [`${prefix}-toolbar`]: true,
      [className]: !!className
    });
    return (
      <div className={cls}>
        {toolbars.map((toolbarline, idx) => {
          return (
            <div className={`${prefix}-toolbar-line`} key={idx}>
              {toolbarline.map((item, idx) => {
                return this.renderItem(item, idx);
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
