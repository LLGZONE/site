import React from "react";
import { message } from "antd";
import { Link } from "@reach/router";
import Layout from "../../components/layout";
import http from "../../lib/http";
import URL from "../../constants/url";
import "./index.less";

export default class Feed extends React.Component {
  state = {
    loading: true,
    movie_list: []
  };
  async componentDidMount() {
    try {
      const data: any = await this.fetchData();
      this.setState({
        loading: false,
        movie_list: data.movie_list
      });
    } catch (err) {
      message.error(err.message);
      this.setState({
        loading: false
      });
    }
  }
  fetchData = async () => {
    const result = await http.get(URL.movie_list);
    return result;
  };
  renderChannel() {
    const isActive = ({ isCurrent, isPa }) => {
      console.log("isActive:", isCurrent);
      return isCurrent ? { className: "active" } : null;
    };
    return (
      <div>
      </div>
    );
  }
  renderList() {
    const { movie_list } = this.state;
    return movie_list.map(item => (
      <div key={item.id} className="movie-item">
        <img
          className="movie-poster"
          src={item.poster}
          width={200}
          height={130}
        />
        <div className="movie-title">{item.title}</div>
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
