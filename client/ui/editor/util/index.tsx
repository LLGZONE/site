import { convertFromHTML, convertToHTML } from 'draft-convert';
import { EditorState, ContentState } from 'draft-js';
import convertConfig from '../configs/convert';
console.log('convertConfig:', convertConfig);
export function html2draft(html: string) {
  return convertFromHTML(convertConfig.fromHtmlConfig)(html);
}

export function draft2html(content: ContentState): string {
  return convertToHTML(convertConfig.toHtmlConfig)(content);
}
