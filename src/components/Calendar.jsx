import React, { Component } from "react";
import moment from "moment";
import "./index.css";
class Calendar extends Component {
  state = {
    dateObj: moment()
  };
  weekdays = moment.weekdaysShort();
  year = () => this.state.dateObj.format("Y");
  month = () => this.state.dateObj.format("MMMM");
  daysInMonth = () => this.state.dateObj.daysInMonth();
  currentDate = () => this.state.dateObj.get("date");
  currentDay = () => this.state.dateObj.format("D");
  firstDay = () => {
    let date = this.state.dateObj;
    let firstDay = date.startOf("month").format("d");
    return firstDay;
  };
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
    for (let i = 1; i <= this.daysInMonth(); i++) {
      let className =
        i === this.currentDay() ? "day badge badge-warning" : "day";
      daysInMonth.push(
        <td key={i} className={className}>
          {i}
        </td>
      );
    }
    console.log(daysInMonth);
    return (
      <div className="container col-sm-4 mt-3">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>{weekdays}</tr>
          </thead>
          <tbody>
            <tr>{blanks.map(b => b)}</tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;
