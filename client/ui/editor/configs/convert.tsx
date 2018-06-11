import React from 'react';
import BLOCK_TYPE from '../constants/blocktype';
import imagePACK from '../entities/image';
import videoPACK from '../entities/video';

export default {
  toHtmlConfig: {
    blockToHTML: block => {
      switch (block.type) {
        case BLOCK_TYPE.ATOMIC:
          return {
            start: '',
            end: ''
          };

        case BLOCK_TYPE.UNSTYLED:
          const text = block.text.trim();
          if (text.length) {
            return {
              start: '<p>',
              end: '</p>',
              empty: ''
            };
          }
          return '';

        default:
          return null;
      }
    },
    entityToHTML: entity => {
      switch (entity.type) {
        case imagePACK.ENTITY_KEY:
          return imagePACK.export2html(entity.data);

        case videoPACK.ENTITY_KEY:
          return videoPACK.export2html(entity.data);
        default:
          return '';
      }
    },
    styleToHTML: style => {
      if (style === 'ITALIC') {
        return <i />;
      }
    }
  },
  fromHtmlConfig: {
    htmlToBlock: nodeName => {
      if (nodeName === 'script') {
        return {
          type: 'atomic',
          data: {}
        };
      }

      if (nodeName === 'bd-video') {
        return {
          type: 'atomic',
          data: {}
        };
      }
    },
    htmlToEntity: (nodeName, node, createEntity) => {
      let config: any = {};

      switch (nodeName) {
        case 'script':
          config = JSON.parse(node.text);
          config.description = (config.description || '')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&');
          return createEntity(imagePACK.ENTITY_KEY, 'IMMUTABLE', config);

        case 'bd-video':
          config = {
            videoInfo: node.outerHTML
          };
          return createEntity(videoPACK.ENTITY_KEY, 'IMMUTABLE', config);
        default: // nothing todo
      }
    }
  }
};
