import React, { Component } from "react";

type InitialState = {
  count: number;
};
export default class Ex08 extends Component<{}, InitialState> {
  intervalId: number | undefined;
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount(): void {
    this.intervalId = setInterval(
        () => this.setState((prevState) => ({
          count: prevState.count < 10 ? prevState.count + 1 : 0
      })),
      1000
    );
  }

  componentWillUnmount(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }
  render() {
      return <div>
        <h2>Count: {this.state.count}</h2>
    </div>;
  }
}
