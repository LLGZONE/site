import React from 'react';
import { Rate } from 'antd';
import * as Path from 'constants/path';
import { Link, navigate } from '@reach/router';
import LoadMore from 'ui/loadmore';
import { connect } from 'react-redux';
import Layout from 'components/layout';
import http from 'lib/http';
//import LazyLoad from 'react-lazyload';
import * as URL from 'constants/api/topfeed';
import './index.less';
import channels from './channel';

class Feed extends React.Component<{
  initial_feed: [any];
}> {
  fetchData = async (cursor: number) => {
    const result = await http<any>({
      url: URL.article_list,
      params: {
        cursor,
        start: cursor,
        count: 3
      }
    });
    return {
      data_list: result.article_list,
      has_more: result.has_more,
      cursor: result.cursor
    };
  };
  renderChannel() {
    return Object.entries(channels).map(([key, value]) => (
      <Link to={`${Path.feed}/${key}`}>{value}</Link>
    ));
  }
  renderList(article_list) {
    return article_list.map(item => (
      <div key={item.id} onClick={() => navigate(`/a/${item.id}`)}>
        <div key={item.id} className="article-item">
          <img
            className="article-poster"
            src={item.images.large}
            width={115}
            height={172}
          />

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
        <div className="feed-main-container">
          <LoadMore
            fetch_data={this.fetchData}
            initial_list={this.props.initial_feed}
          >
            {this.renderList}
          </LoadMore>
        </div>
      </Layout>
    );
  }
}

const mapState = (state: any) => {
  return {
    initial_feed: state.feed
  };
};
export default connect(mapState)(Feed);
