'use client'

import ReactDatePicker from "react-datepicker";
import { formatToDma } from "../utils/date";
import moment from "moment";


const DatePickerCustom = ({ formState, setInfoForms }) => {


  const handleDateChange = (date) => {
    setInfoForms('birthDate', formatToDma(date));
  };

  const selected = () => {
    let formattedDate = null;

    if (formState.birthDate !== '') {
      const[date, time] = formState.birthDate.split('T')
      console.log(date)
      const [year, month, day] = date.split('-').map(Number);
      formattedDate = new Date(`${month}-${day}-${year}`)
  
    }
    return formattedDate

    }

  return (
    <ReactDatePicker
      selected={selected()}
      onChange={(date) => handleDateChange(date)}
      placeholderText=" Día / Mes / Año "
      dateFormat="d/MM/yyyy"
      scrollableYearDropdown
      isClearable
      className="custom-datepicker"
    />);

}

export default DatePickerCustom;
