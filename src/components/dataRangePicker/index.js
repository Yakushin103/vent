import React, { Component } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import './index.scss'
 
const CustomPicker = () => {

    return (
        <DateRangePicker
        initialSettings={{ startDate: '1/1/2020', endDate: '3/1/2020' }}
      >
         <input type="text" className="form-control" />
      </DateRangePicker>
    )
}

export default CustomPicker 