import React from 'react';
import http from 'lib/http';
import * as URL from 'constants/api/topfeed';
import Layout from 'components/layout';
import intl from 'react-intl-universal';

export default class Detail extends React.Component<{
  item_id: string;
}> {
  state = {
    loading: true,
    article_info: {}
  };
  async componentDidMount() {
    const { item_id } = this.props;
    try {
      const article = await http({
        url: URL.article_item,
        data: {
          item_id
        }
      });
      this.setState({
        loading: false,
        article_info: article
      });
    } catch (err) {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    let start = new Date();
    let end = new Date();
    let expires = new Date();
    let price = 123456.78;
    return (
      <Layout>
        <h1>基本使用</h1>
        <div>
          <div className="title">Basic Examples:</div>
          <div>{intl.get('SIMPLE')}</div>
          <div>{intl.get('HELLO', { name: 'Tony', where: 'Alibaba' })}</div>
        </div>
        <h1>日期显示</h1>
        <div className="title">Date Examples:</div>
        <div>{intl.get('SALE_START', { start })}</div>
        <div>{intl.get('SALE_END', { end })}</div>
        <div>{intl.get('COUPON', { expires })}</div>
        <h1>货币显示</h1>
        <div>
          <div className="title">Currency Example:</div>
          <div>{intl.get('SALE_PRICE', { price })}</div>
        </div>
        <h1>单复数</h1>
        <div>
          <div className="title">Plural Examples:</div>
          <div>{intl.get('PHOTO', { photoNum: 0 })}</div>
          <div>{intl.get('PHOTO', { photoNum: 1 })}</div>
          <div>{intl.get('PHOTO', { photoNum: 1000000 })}</div>
        </div>
        <h1>富文本</h1>
        <div>
          <div className="title">Html Examples:</div>
          <div>{intl.getHTML('TIP')}</div>
          <div>
            {intl.getHTML('TIP_VAR', { message: 'HTML with variables' })}
          </div>
          <div>
            {intl.getHTML('TIP_VAR', {
              message:
                '<script>alert("ReactIntlUniversal prevents from xss attack")</script>'
            })}
          </div>
        </div>
      </Layout>
    );
  }
}
