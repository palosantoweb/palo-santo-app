import moment from "moment";

export const formatToDma = (date) => {
  if (!date || isNaN(new Date(date)) || new Date(date) > new Date()) {
    return '';
}
   /* const d = new Date(date);
    console.log(d)
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();

    console.log('day', day)
    console.log('month', month)
    console.log('year', year)

    return `${day}/${month}/${year}`;*/
    const finalDate = new Date(date)
    var dateString = moment(finalDate).format('DD-MM-YYYY');
    return dateString;
  };