import React from 'react';
import { connect } from 'react-redux';
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
      <div className="detail-container">
        <h1 className="detail-title">{title}</h1>
        <h2>{item_id}</h2>
        <div className="detail-conteint">{content}</div>
      </div>
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
