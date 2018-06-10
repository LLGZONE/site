import React from 'react';
import { message, Rate } from 'antd';
import { Link, navigate } from '@reach/router';
import Layout from '../../components/layout';
import http from '../../lib/http';
import LazyLoad from 'react-lazyload';
import * as URL from '../../constants/api/topfeed';
import Auth from 'decorators/auth';
import './index.less';

@Auth({
  checkLogin: true
})
export default class Feed extends React.Component<
  {},
  {
    loading: boolean;
    article_list: any[];
  }
> {
  state = {
    loading: true,
    article_list: []
  };
  async componentDidMount() {
    try {
      const data: any = await this.fetchData();
      this.setState({
        loading: false,
        article_list: data.article_list
      });
    } catch (err) {
      message.error(err.message);
      this.setState({
        loading: false
      });
    }
  }
  fetchData = async () => {
    const result = await http.get(URL.article_list);
    return result;
  };
  renderChannel() {
    const isActive = ({ isCurrent, isPa }) => {
      return isCurrent ? { className: 'active' } : null;
    };
    return <div />;
  }
  renderList() {
    const { article_list } = this.state;
    return article_list.map(item => (
      <div key={item.id} onClick={() => navigate(`/a/${item.id}`)}>
        <div key={item.id} className="article-item">
          <LazyLoad>
            <img
              className="article-poster"
              src={item.images.large}
              width={115}
              height={172}
              referrerPolicy="never"
            />
          </LazyLoad>
          <div className="article-detail">
            <div className="article-title">{item.title}</div>
            <div className="article-rate">
              <div className="article-rate-score">{item.rating.average}</div>
              <Rate value={item.rating.average / 2} disabled />
            </div>
          </div>
        </div>
      </div>
    ));
  }
  render() {
    return (
      <Layout className="feed-container">
        {this.renderChannel()}
        <div className="feed-main-container">{this.renderList()}</div>
      </Layout>
    );
  }
}
