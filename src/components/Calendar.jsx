import React, { Component } from "react";
import moment from "moment";
moment.updateLocale("en", {
  weekdaysShort: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
});
class Calendar extends Component {
  state = {};
  weekdays = moment.weekdaysShort();
  render() {
    return (
      <div className="container col-sm-4 mt-3">
        <table className="table">
          <thead className="thead-dark">
            {this.weekdays.map(day => (
              <th key={day} className="week-day">
                {day}
              </th>
            ))}
          </thead>
        </table>
      </div>
    );
  }
}

export default Calendar;
