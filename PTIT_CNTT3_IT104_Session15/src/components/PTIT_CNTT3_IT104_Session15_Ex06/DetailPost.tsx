import React, { Component } from 'react'

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
}
type InitialProps = {
    posts: Post[],
}
export default class DetailPost extends Component<InitialProps> {
  render() {
    return (
      <div>
            <h2>Chi tiết bài viết</h2>
            {this.props.posts.map((post) => (
              <div key={post.id}>
                <p><strong>Id:</strong> {post.id}</p>
                <p><strong>Tiêu đề:</strong> {post.title}</p>
                <p><strong>Nội dung:</strong> {post.content}</p>
                    <p><strong>Tác giả:</strong> {post.author}</p>
                    <hr />
              </div>
            ))}
      </div>
    )
  }
}
