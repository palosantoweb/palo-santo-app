import moment from "moment";

export const formatToDma = (date) => {
  if (!date || isNaN(new Date(date)) || new Date(date) > new Date()) {
    return '';
}
    const finalDate = new Date(date)
    var dateString = moment(finalDate).format('YYYY-MM-DD');
    return dateString;
  };