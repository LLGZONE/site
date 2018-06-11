import React from 'react';
import {
  ContentBlock,
  Entity,
  RichUtils,
  Modifier,
  EditorState,
  ContentState,
  SelectionState,
  EntityInstance
} from 'draft-js';
import classnames from 'classnames';
import {
  getCurrentInlineStyle,
  replaceEntityData,
  getSelectedBlock,
  getToggleStyleFunc,
  getToggleBlockStyleFunc
} from 'rc-editor-utils';

export function noop(args?: any): any {}

export function getApplyFontStyleFunc(prefix, callbacks) {
  return function applyStyle(styleName: string, needFocus = false) {
    const { getEditorState, setEditorState } = callbacks;
    let editorState = getEditorState();
    let contentState = editorState.getCurrentContent();
    const selection = editorState.getSelection();
    const currentStyle = getCurrentInlineStyle(editorState);
    if (selection.isCollapsed()) {
      currentStyle.forEach(style => {
        if (style.indexOf(`${prefix}`) !== -1 && style !== styleName) {
          editorState = RichUtils.toggleInlineStyle(editorState, style);
        }
      });
      editorState = RichUtils.toggleInlineStyle(editorState, styleName);
      return setEditorState(editorState, true);
    }

    currentStyle.forEach(style => {
      if (style.indexOf(`${prefix}`) !== -1) {
        contentState = Modifier.removeInlineStyle(
          contentState,
          selection,
          style
        );
      }
    });
    contentState = Modifier.applyInlineStyle(
      contentState,
      selection,
      styleName
    );

    setEditorState(
      EditorState.push(editorState, contentState, 'apply-style'),
      needFocus
    );
  };
}

export function getToggleFontStyleFunc(prefix, callbacks) {
  return function toggleStyle(styleName: string) {
    const { getEditorState, setEditorState } = callbacks;
    let editorState = getEditorState(true);
    const selection = editorState.getSelection();
    const currentStyle = getCurrentInlineStyle(editorState);

    currentStyle.forEach(style => {
      if (style.indexOf(`${prefix}`) !== -1 && style !== styleName) {
        editorState = RichUtils.toggleInlineStyle(editorState, style);
      }
    });
    editorState = RichUtils.toggleInlineStyle(editorState, styleName);

    if (selection.isCollapsed()) {
      return setEditorState(editorState, true);
    }

    setEditorState(editorState);
  };
}

export function findEntities(entityType: string) {
  return function findEntitiesFunc(contentBlock, callback, contentState) {
    contentBlock.findEntityRanges(character => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        contentState.getEntity(entityKey).getType() === entityType
      );
    }, callback);
  };
}

export function getSelectionText(editorState, selection) {
  const anchorKey = selection.getAnchorKey();
  const currentContent = editorState.getCurrentContent();
  const currentBlock = currentContent.getBlockForKey(anchorKey);
  return currentBlock.getText();
}

export function getApplyEntityFunc(callbacks) {
  return function applyEntity(
    entityType: string,
    data: Object = {},
    entityMode: string = 'MUTABLE'
  ) {
    const { getEditorState, setEditorState } = callbacks;
    const editorState = getEditorState();
    const contentState = editorState.getCurrentContent();
    const selection = editorState.getSelection();
    const currentEntity = getCurrentEntity(editorState);

    const entityKey = contentState.createEntity(entityType, entityMode, data);

    const replacedContent = Modifier.applyEntity(
      contentState,
      selection,
      entityKey
    );
    return setEditorState(
      EditorState.push(editorState, replacedContent, 'toggle-block')
    );
  };
}

export function getToggleEntityFunc(callbacks) {
  return function toggleEntity(
    entityType: string,
    data: Object = {},
    active: boolean,
    entityMode: string = 'MUTABLE'
  ) {
    const { getEditorState, setEditorState } = callbacks;
    const editorState = getEditorState();
    const contentState = editorState.getCurrentContent();
    const selection = editorState.getSelection();
    let replacedContent: ContentState = contentState;

    let entityKey = null;
    const currentEntity = getCurrentEntity(editorState);

    if (
      !currentEntity ||
      contentState.getEntity(currentEntity).getType() !== entityType ||
      (selection.isCollapsed() && !active)
    ) {
      contentState.createEntity(entityType, entityMode, data);
      entityKey = contentState.getLastCreatedEntityKey();
    }

    if (selection.isCollapsed()) {
      replacedContent = Modifier.insertText(
        editorState.getCurrentContent(),
        selection,
        ' ',
        null,
        active ? null : entityKey
      );
    } else {
      replacedContent = Modifier.applyEntity(
        editorState.getCurrentContent(),
        selection,
        entityKey
      );
    }

    return setEditorState(
      EditorState.push(editorState, replacedContent, 'toggle-block')
    );
  };
}

export function getCurrentEntity(editorState: EditorState): string {
  let entity;
  const selection = editorState.getSelection();
  let start = selection.getStartOffset();
  let end = selection.getEndOffset();
  if (start === end && start === 0) {
    end = -1;
  } else if (start === end) {
    start = start - 1;
  }
  const block = getSelectedBlock(editorState);
  for (let i = start; i < end; i++) {
    const currentEntity = block.getEntityAt(i);
    if (!currentEntity) {
      entity = undefined;
      break;
    }
    if (i === start) {
      entity = currentEntity;
    } else {
      if (entity !== currentEntity) {
        entity = undefined;
        break;
      }
    }
  }
  return entity;
}
/**
 * 内联元素插件工厂
 * @param name
 * @param style
 */
export function inlineStyleComponentFactory(name: string, style: Object = {}) {
  return {
    name: name,
    component: class extends React.Component<{
      editorState: EditorState;
      onChange: (EditorState) => void;
    }> {
      toggleStyle = styleName => {
        const { editorState, onChange } = this.props;
        onChange(RichUtils.toggleInlineStyle(editorState, styleName));
      };
      render() {
        const currentStyle = getCurrentInlineStyle(this.props.editorState);
        const upperName = name.toUpperCase();
        const classNames = classnames({
          ['editor-icon']: true,
          [`editor-icon-${name}`]: true,
          active: currentStyle.has(upperName)
        });
        return (
          <span
            onMouseDown={e => {
              this.toggleStyle(upperName);
              e.preventDefault();
            }}
            className={classNames}
          >
            {name}
          </span>
        );
      }
    }
  };
}
/**
 * 块状元素插件工厂
 * @param name
 * @param style
 */
export function blockStyleComponentFactory(name: string) {
  return {
    name,
    component: class extends React.Component<{
      editorState: EditorState;
      onChange: (EditorState) => void;
      className?: string;
    }> {
      static defaultProps = {
        className: ''
      };
      toggleBlockStyle = styleName => {
        const { onChange, editorState } = this.props;
        onChange(RichUtils.toggleBlockType(editorState, styleName));
      };
      render() {
        const { editorState, className, onChange } = this.props;
        const selectedBlock = getSelectedBlock(editorState);
        const classNames = classnames({
          ['editor-icon']: true,
          [`editor-icon-${name}`]: true,
          active: selectedBlock.getType() === name
        });
        return (
          <span
            onMouseDown={() => this.toggleBlockStyle(name)}
            className={classNames}
          >
            {name}
          </span>
        );
      }
    }
  };
}
