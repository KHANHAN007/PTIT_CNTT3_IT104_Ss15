import React, { Component } from 'react'

type InitialState = {
    range:string,
    tmp:string,
}
export default class Ex04 extends Component<{}, InitialState> {
  constructor(props: {}) {
    super(props);
    this.state = {
        range: "",
        tmp: "",
    };
    }
    handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        this.setState({
            range: this.state.tmp
        })
    }
    handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            tmp: e.target.value
        })
    }
  render() {
    return (
      <div>
            <p>Tiến độ hoàn thành: {this.state.range}%</p>
            <form action="" onSubmit={this.handleSubmit}>
                <input type="range" value={this.state.tmp} onChange={this.handleChange} />
                <button type="submit">Submit</button>
            </form>
      </div>
    )
  }
}
