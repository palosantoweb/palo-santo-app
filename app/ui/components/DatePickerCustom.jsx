'use client'

import ReactDatePicker from "react-datepicker";
import { formatToDma } from "../../utils/date";


const DatePickerCustom = ({ formState, setInfoForms }) => {


  const handleDateChange = (date) => {
    setInfoForms('birthDate', formatToDma(date));
  };

  const selected = () => {
    let formattedDate = null;

    if (formState.birthDate !== '') {
      const[date, time] = formState.birthDate.split('T')
      const [year, month, day] = date.split('-').map(Number);
      formattedDate = new Date(`${month}-${day}-${year}`)
  
    }
    return formattedDate

    }

    const calculateMaxDate = () => {
      const currentDate = new Date();
      currentDate.setFullYear(currentDate.getFullYear() - 18);
      return currentDate;
    };

  return (
    <ReactDatePicker
      name="birthDate"
      selected={selected()}
      onChange={(date) => handleDateChange(date)}
      placeholderText=" Día / Mes / Año "
      dateFormat="d/MM/yyyy"
      scrollableYearDropdown
      isClearable
      className="custom-datepicker"
      required
      maxDate={calculateMaxDate()}
    />);

}

export default DatePickerCustom;
