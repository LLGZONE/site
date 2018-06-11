/*
* 把当前组件导出为html结构的规则
*/
function export2html(entityData) {
  const { width, height, web_uri, description } = entityData;
  let html = '';
  const data = {
    width,
    web_uri,
    height,
    description: description || ''
  };
  const jsonData = JSON.stringify(data)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  if (web_uri) {
    html = `<script type="text/x.bytedance.image">${jsonData}</script>`;
  }

  return html;
}
export default {
  ENTITY_KEY: 'ENTITY_KEY',
  export2html
};
