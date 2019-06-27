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
      <table>
        {this.weekdays.map(day => (
          <th key={day} className="week-day">
            {day}
          </th>
        ))}
      </table>
    );
  }
}

export default Calendar;
