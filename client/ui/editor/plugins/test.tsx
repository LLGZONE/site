import React from 'react';
import { Entity, Modifier, EditorState, RichUtils } from 'draft-js';
function findWithRegex(regex, contentBlock, callback) {
  // Get the text from the contentBlock
  const text = contentBlock.getText();
  let matchArr;
  let start; // eslint-disable-line
  // Go through all matches in the text and return the indizes to the callback
  while ((matchArr = regex.exec(text)) !== null) {
    // eslint-disable-line
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}

const suggestionRegex = new RegExp(`(\\s|^)@[\\w]*`, 'g');

const callbacks = {
  getEditorState: () => {
    return EditorState.createEmpty();
  },
  setEditorState: any => {},
  getStyleMap: () => {}
};

function toggleInlineStyle(style) {
  return () => {
    const editorState = callbacks.getEditorState() as EditorState;
    callbacks.setEditorState(
      RichUtils.toggleInlineStyle(editorState, `customer-style-${style}`)
    );
  };
}
const Test = {
  name: 'test',
  callbacks,
  component: (
    <div>
      <div onMouseDown={toggleInlineStyle('red')}>red</div>
      <div onMouseDown={toggleInlineStyle('bold')}>bold</div>
    </div>
  ),
  toHtml(text, entity) {
    console.log('>> toHtml', entity);
    if (entity.getType() === 'LINK') {
      return `<a href="#">text</a>`;
    }
  },
  customStyleFn(styleSet) {
    return styleSet
      .map(style => {
        if (style === 'customer-style-red') {
          return {
            color: 'red'
          };
        }
        if (style === 'customer-style-bold') {
          return {
            fontWeight: 'bold'
          };
        }
        return {};
      })
      .reduce(Object.assign);
  }
};

export default Test;
