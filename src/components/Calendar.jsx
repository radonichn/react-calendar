import React, { Component } from "react";
import "./index.css";
class Calendar extends Component {
  state = {
    current: new Date()
    // immutable: new Date()
  };
  months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  year = () => this.state.current.getFullYear();
  month = () => this.months[this.state.current.getMonth()];
  daysInMonth = () =>
    new Date(this.year(), this.state.current.getMonth() + 1, 0).getDate(); // new Date(year(), this.state.current.getMonth() + 1, 0).getDate()) /////
  currentDate = () => this.state.current.getDate();
  firstDay = () =>
    new Date(this.year(), this.state.current.getMonth(), 0).getDay();
  render() {
    let weekdays = this.weekdays.map(day => {
      return (
        <th key={day} className="week-day">
          {day}
        </th>
      );
    });
    let blanks = [];
    console.log(this.month());
    for (let i = 0; i < this.firstDay(); i++) {
      blanks.push(
        <td className="blank" key={i}>
          {""}
        </td>
      );
    }
    let daysInMonth = [];
    for (let i = 1; i <= this.daysInMonth(); i++) {
      let className = i === this.currentDate() ? "day current" : "day";
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
