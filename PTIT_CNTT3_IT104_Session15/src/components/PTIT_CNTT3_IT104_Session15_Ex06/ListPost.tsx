import React, { Component } from "react";
import DetailPost from "./DetailPost";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}
type InitialState = {
  posts: Post[];
};
export default class Ex06 extends Component<{}, InitialState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: "Tại sao nên học ReacJS",
          content: "Học ReactJS để đi làm",
          author: "David",
        },
        {
          id: 2,
          title: "Props trong ReactJS",
          content: "Props giúp truyền dữ liệu giữa các component",
          author: "Alice",
        },
        {
          id: 3,
          title: "State trong ReactJS",
          content: "State giúp quản lý dữ liệu trong component",
          author: "Bob",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <DetailPost posts={this.state.posts} />
      </div>
    );
  }
}