import React from 'react';
import { message } from 'antd';
import { Link } from '@reach/router';
import Layout from '../../components/layout';
import http from '../../lib/http';
import LazyLoad from 'react-lazyload';
import * as URL from '../../constants/api/topfeed';
import './index.less';

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
      console.log('isActive:', isCurrent);
      return isCurrent ? { className: 'active' } : null;
    };
    return <div />;
  }
  renderList() {
    const { article_list } = this.state;
    return article_list.map(item => (
      <Link to={`/a/${item.id}`} key={item.id}>
        <div key={item.id} className="article-item">
          <LazyLoad>
            <img
              className="article-poster"
              src={item.images.small}
              width={200}
              height={130}
            />
          </LazyLoad>
          <div className="article-title">{item.title}</div>
        </div>
      </Link>
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
