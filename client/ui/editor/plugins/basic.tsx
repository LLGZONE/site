import {
  inlineStyleComponentFactory,
  blockStyleComponentFactory
} from './utils';

const Bold = inlineStyleComponentFactory('bold');
const Italic = inlineStyleComponentFactory('italic');
const Underline = inlineStyleComponentFactory('underline');
const StrikeThrough = inlineStyleComponentFactory('strikethrough');
const H1 = blockStyleComponentFactory('header-one');
const H2 = blockStyleComponentFactory('header-two');
const H3 = blockStyleComponentFactory('header-three');
const H4 = blockStyleComponentFactory('header-four');
const H5 = blockStyleComponentFactory('header-five');
const H6 = blockStyleComponentFactory('header-six');
const Blockquote = blockStyleComponentFactory('blockquote');

export default {
  Bold,
  Italic,
  Underline,
  StrikeThrough,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Blockquote
};
