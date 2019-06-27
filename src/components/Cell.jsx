import React, { Component } from "react";
class Cell extends Component {
  render() {
    const { customClass, val, id } = this.props;
    return (
      <td className={customClass} onClick={() => this.props.handleNote(id)}>
        {val}
      </td>
    );
  }
}

export default Cell;
