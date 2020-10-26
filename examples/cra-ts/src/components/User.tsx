import React, { Component } from "react";

interface Props {
  name: string;
  active?: boolean;
  note?: string;
}
interface State {
  online: boolean;
}

export default class User extends Component<Props, State> {
  static defaultProps = {
    active: false,
    note: "test 123",
  };

  public readonly state: Readonly<State> = {
    online: false,
  };

  render() {
    return (
      <>
        <p>
          {" "}
          Hello {this.props.name} {this.props.note}{" "}
        </p>
        {this.state.online && <p>Online</p>}
      </>
    );
  }
}
