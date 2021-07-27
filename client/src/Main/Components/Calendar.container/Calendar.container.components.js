import React from 'react';
import Calender from '../Calander.components/Calander';
import { CalenderBox } from './CalendarStyle';
import './Calendar.styles.scss';

const CalendarContainer = () => {
  return (
    <CalenderBox>
      <Calender />
      <Calender />
    </CalenderBox>
  );
};

export default CalendarContainer;
