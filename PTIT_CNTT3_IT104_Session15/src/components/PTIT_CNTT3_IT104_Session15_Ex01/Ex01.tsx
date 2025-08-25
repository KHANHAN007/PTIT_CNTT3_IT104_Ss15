import React, { Component } from "react";

type InitialState = {
  user: {
    email: string;
  };
};
export default class Ex01 extends Component<{}, InitialState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      user: {
        email: "",
      },
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(JSON.stringify(this.state.user));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Form</h2>
          <label>
            Email
            <input
              type="email"
              value={this.state.user.email}
              onChange={(e) =>
                this.setState({ user: { email: e.target.value } })
              }
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
