import React, { Component } from "react";
import Month from "./Month";
import { getMonthName } from "./helpers";
import "./DatePicker.css";

class DatePicker extends Component {
    constructor(props){
      super()
     const { fullDate, onDayClick } = props;

     const dateNumber = fullDate.getDate();
     const monthNumber = fullDate.getMonth();
     const yearNumber = fullDate.getFullYear();
     const monthName = getMonthName(monthNumber);
    } 

render() {
    return (
      <div className="DatePickerContainer">
        <div className="DatePickerContainer__Title">{this.monthName}</div>
        <Month
          date={this.dateNumber}
          month={this.monthNumber}
          year={this.yearNumber}
          onDayClick={this.onDayClick}
        />
      </div> 
    );
  }
}

export default DatePicker;