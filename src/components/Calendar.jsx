import React, { Component } from "react";
import moment from "moment";
import "./index.css";
class Calendar extends Component {
  weekdays = moment.weekdaysShort();
  state = {
    current: moment()
  };
  year = () => this.state.current.format("Y");
  month = () => this.state.current.format("MMMM");
  daysInMonth = () => this.state.current.daysInMonth();
  currentDate = () => this.state.current.get("date");
  currentDay = () => this.state.current.format("D");
  firstDay = () => this.state.current.startOf("month").format("d");
  render() {
    let weekdays = this.weekdays.map(day => {
      return (
        <th key={day} className="week-day">
          {day}
        </th>
      );
    });
    let blanks = [];
    for (let i = 0; i < this.firstDay(); i++) {
      blanks.push(
        <td className="blank" key={i}>
          {""}
        </td>
      );
    }
    let daysInMonth = [];
    // console.log(moment());
    for (let i = 1; i <= this.daysInMonth(); i++) {
      let className =
        i == this.currentDay() ? "day badge badge-warning" : "day";
      daysInMonth.push(
        <td key={i * 125} className={className}>
          {i}
        </td>
      );
    }
    let totalDays = [...blanks, ...daysInMonth];
    let rows = [],
      cells = [];
    totalDays.forEach((row, i) => {
      if (i % 7 !== 0) cells.push(row);
      else {
        let insRow = cells.slice();
        rows.push(insRow);
        cells = [];
        cells.push(row);
      }
      if (i === totalDays.length - 1) {
        let insRows = cells.slice();
        rows.push(insRows);
      }
    });
    let trElems = rows.map((d, i) => {
      return <tr key={i * 25}>{d}</tr>;
    });
    return (
      <div className="container col-sm-4 mt-3">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>{weekdays}</tr>
          </thead>
          <tbody>{trElems}</tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;
