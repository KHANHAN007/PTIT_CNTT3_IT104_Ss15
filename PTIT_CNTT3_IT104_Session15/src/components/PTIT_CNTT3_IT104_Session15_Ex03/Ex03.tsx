import React, { Component } from "react";

type InitialState = {
    dateOfBirth: string;
    temp: string;
};
export default class Ex03 extends Component<{}, InitialState> {
  constructor(props: {}) {
    super(props);
    this.state = {
        dateOfBirth: "",
        temp: "",
    };
  }
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      this.setState({ dateOfBirth: this.state.temp });
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ temp: e.target.value });
  };
  render() {
    return (
      <div>
        <p>Ngày sinh: {this.state.dateOfBirth}</p>
        <form action="" onSubmit={this.handleSubmit}>
          <input type="date" onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
