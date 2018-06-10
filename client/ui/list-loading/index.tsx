import React from 'react';
import classnames from 'classnames';
import './style';

export default class ListLoading extends React.Component<{
  is_loading: boolean;
  has_more: boolean;
  loading_text?: string;
  end_text?: string;
}> {
  static defaultProps = {
    loading_text: 'loading',
    end_text: 'no more content'
  };
  render() {
    const { is_loading, has_more, loading_text, end_text } = this.props;
    return (
      <div className="loading-box">
        {has_more && <div>{loading_text} </div>}
        {!has_more && <div>{end_text}</div>}
      </div>
    );
  }
}
