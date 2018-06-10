import React from 'react';
import { throttle } from 'lodash';
import ListLoading from 'ui/list-loading';
import * as Util from 'lib/util';
import './style';
export interface ResponseProps {
  data_list: any[];
  has_more: boolean;
  cursor: number;
}
export interface Item {
  id: string;
}
export default class LoadMore extends React.Component<
  {
    children: (data_list: Item[]) => React.ReactNode;
    fetch_data: (cursor: number) => Promise<ResponseProps>;
    placeholder?: React.ReactNode;
    defaultValue?: any[];
  },
  {
    data_list: any[];
    is_loading: boolean;
    has_more: boolean;
    cursor: number;
  }
> {
  list: HTMLElement;
  constructor(props) {
    super(props);
    this.state = {
      data_list: props.defaultValue || [],
      is_loading: false,
      has_more: true,
      cursor: 0
    };
    this.scrollLoadMore = throttle(this.scrollLoadMore, 500);
  }
  mergeList(a, b) {
    const uniqList = [];
    for (const item of b) {
      if (a.findIndex(x => x.id === item.id) === -1) {
        uniqList.push(item);
      }
    }
    return [...a, ...uniqList];
  }
  componentDidMount() {
    document.addEventListener('scroll', this.scrollLoadMore);
    this.scrollLoadMore();
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollLoadMore);
  }
  async doLoadMore() {
    const { cursor } = this.state;
    this.setState({ is_loading: true });
    const { fetch_data } = this.props;
    try {
      const result = await fetch_data(cursor);
      this.setState({
        cursor: result.cursor,
        has_more: result.has_more,
        data_list: this.mergeList(this.state.data_list, result.data_list)
      });
    } finally {
      this.setState({
        is_loading: false
      });
    }
  }
  scrollLoadMore = () => {
    const { has_more, is_loading } = this.state;
    const { height, top } = this.list.getBoundingClientRect();
    if (
      !is_loading &&
      has_more &&
      height + top <= window.innerHeight + Util.scrollY()
    ) {
      this.doLoadMore();
    }
  };
  render() {
    const { is_loading, data_list, has_more } = this.state;
    const { children } = this.props;
    let { placeholder } = this.props;
    if (is_loading || data_list.length > 0) {
      placeholder = null;
    }
    return (
      <div className="list-container">
        <ul className="list-content" ref={el => (this.list = el)}>
          {children(data_list)}
          {<ListLoading is_loading={is_loading} has_more={has_more} />}
        </ul>
        {placeholder}
      </div>
    );
  }
}
