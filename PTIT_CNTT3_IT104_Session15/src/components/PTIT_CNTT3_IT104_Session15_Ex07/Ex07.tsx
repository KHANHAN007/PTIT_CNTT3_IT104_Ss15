import React, { Component } from "react";

type InitialState = {
  time: string;
};
export default class Ex07 extends Component<{}, InitialState> {
  intervalId: number | undefined;
  constructor(props: {}) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount(): void {
    this.intervalId = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }
  render() {
    return (
      <div>
        <h2>Thời gian hiện tại: {this.state.time}</h2>
      </div>
    );
  }
}
