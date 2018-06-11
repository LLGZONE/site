/*
* 把当前组件导出为html结构的规则
*/
function export2html(entityData) {
  let videoInfo = entityData;

  if (entityData.videoInfo) {
    // TODO
    videoInfo = JSON.parse(entityData.videoInfo);
  }
  // 服务端API返回视频的json数据，需要构造出<bd-video>字符串
  const arr = Object.keys(videoInfo).map(key => {
    let val = videoInfo[key];
    // 去掉属性前缀：video_
    key = key.replace(/^video_/, '');

    if (typeof val === 'object') {
      val = JSON.stringify(val);
    }

    return `data-${key}='${val}'`;
  });
  return `<bd-video ${arr.join(' ')}></bd-video>`;
}
export default {
  ENTITY_KEY: 'VIDEO',
  export2html
};
