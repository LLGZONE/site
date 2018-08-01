import React from 'react';
import { connect } from 'react-redux';
import HtmlContent from 'ui/html-content';
import Layout from 'components/layout';
import './index.less';

export interface DetailProps {
  content: string;
  title: string;
}
class Detail extends React.Component<{
  title: string;
  content: string;
  item_id: string;
}> {
  render() {
    const { title, content, item_id } = this.props;
    return (
      <Layout className="feed-container">
        <div className="detail-container">
          <h1 className="detail-title">{title}</h1>
          <h2>{item_id}</h2>
          <HtmlContent className="detail-content">{content}</HtmlContent>
        </div>
      </Layout>
    );
  }
}
const mapState = (state: any) => {
  return {
    title: state.detail.title,
    content: state.detail.content,
    item_id: state.detail.item_id
  };
};
export default connect(mapState)(Detail);
