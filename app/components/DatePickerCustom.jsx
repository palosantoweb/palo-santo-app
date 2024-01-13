'use client'

import ReactDatePicker from "react-datepicker";
import { formatToDma } from "../utils/date";
import moment from "moment";


const DatePickerCustom = ({ formState, setInfoForms }) => {


  const handleDateChange = (date) => {
    setInfoForms('birthDate', formatToDma(date));
  };

  const selected = () => {
    let fechaFormateada = null;
    console.log(fechaFormateada)

    if (formState.birthDate) {

      let [dia, mes, anio] = formState.birthDate?.split('-').map(Number);
      console.log(dia, mes, anio)
      fechaFormateada = new Date(`${anio}-${mes}-${dia}T00:00:00`)
  
    }
    return fechaFormateada

    }

  return (
    <ReactDatePicker
      selected={selected()}
      onChange={(date) => handleDateChange(date)}
      placeholderText="Día / Mes / Año"
      dateFormat="dd/MM/yyyy"
      scrollableYearDropdown
      isClearable
      className="custom-datepicker"
    />);

}

export default DatePickerCustom;
