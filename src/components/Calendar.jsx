import React, { Component } from "react";
import moment from "moment";
moment.updateLocale("en", {
  weekdaysShort: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
});
class Calendar extends Component {
  state = {
    dateObj: moment()
  };
  firstDay = () => {
    let date = this.state.dateObj;
    let firstDay = date.startOf("month").format("d");
    return firstDay;
  };
  weekdays = moment.weekdaysShort();
  render() {
    let weekdays = this.weekdays.map(day => {
      return (
        <th key={day} className="week-day">
          {day}
        </th>
      );
    });
    return (
      <div className="container col-sm-4 mt-3">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>{weekdays}</tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default Calendar;
