import React, { Component } from "react";

type InitialState = {
  color: string;
};
export default class Ex02 extends Component<{}, InitialState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      color: "",
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.state.color);
    const formData = new FormData(e.currentTarget);
    const color = formData.get("color") as string;
    this.setState({ color });
  };

  render() {
    return (
      <div>
        <h2>Color: {this.state.color}</h2>
        <h3>Form</h3>
        <form action="" onSubmit={this.handleSubmit}>
          <input type="color" name="color" defaultValue={this.state.color} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
