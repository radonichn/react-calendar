import React, { Component } from "react";
import "./index.css";
import Cell from "./Cell";
class Calendar extends Component {
  state = {
    notes: [],
    current: new Date(),
    immutable: new Date(),
    note: ""
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
  getMonth = () => this.state.current.getMonth();
  month = () => this.months[this.getMonth()];
  daysInMonth = () =>
    new Date(this.year(), this.state.current.getMonth() + 1, 0).getDate(); // new Date(year(), this.state.current.getMonth() + 1, 0).getDate()) /////
  currentDate = () => this.state.current.getDate();
  isCurrentDay = day => {
    let date = new Date();
    return (
      new Date(this.year(), this.getMonth(), day).getTime() ===
      new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
    );
  };
  firstDay = () =>
    new Date(this.year(), this.state.current.getMonth(), 0).getDay();

  nextMonth = () => {
    let d = new Date(this.state.current.getTime());
    let current = new Date(d.setMonth(d.getMonth() + 1));
    this.setState({ current });
  };
  currentMonth = () => {
    let current = new Date(this.state.immutable.getTime());
    this.setState({ current });
  };
  prevMonth = () => {
    let d = new Date(this.state.current.getTime());
    let current = new Date(d.setMonth(d.getMonth() - 1));
    this.setState({ current });
  };
  getIndex = id => {
    return this.state.notes.findIndex(x => x.id === id);
  };
  handleNote = id => {
    const notes = [...this.state.notes];
    const index = this.getIndex(id);
    if (index !== -1) {
      let text = prompt("What did you planned?", notes[index].text);
      if (text != null) {
        notes[index].text = text;
      }
    } else {
      let text = prompt("What did you planned?", "");
      if (text != null) {
        const newItem = {
          id,
          text
        };
        notes.push(newItem);
      }
    }
    this.setState({ notes });
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
      const id = new Date(this.year(), this.getMonth(), i).getTime();
      let className = this.isCurrentDay(i) ? "day current" : "day";
      const index = this.getIndex(id);
      if (index !== -1 && this.state.notes[index].text !== "") {
        className += " event";
      }
      daysInMonth.push(
        <Cell
          key={i * 125}
          customClass={className}
          val={i}
          id={id}
          handleNote={this.handleNote}
          handleDouble={this.handleAll}
        />
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
      <div className="container col-sm-12 col-md-4 mt-3">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th colSpan="3">{this.month()}</th>
              <th colSpan="1">{this.year()}</th>
              <th className="table-nav" onClick={this.prevMonth}>
                <span className="arrows">🢐</span>
              </th>
              <th className="table-nav" onClick={this.currentMonth}>
                today
              </th>
              <th className="table-nav" onClick={this.nextMonth}>
                <span className="arrows">🢒</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="thead-light">{weekdays}</tr>
            {trElems}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;
