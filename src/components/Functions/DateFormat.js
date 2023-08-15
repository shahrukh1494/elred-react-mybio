export function convertDateFormat(dateString) {
  const [month, day, year] = dateString.split("/"); // eslint-disable-line
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthName = months[parseInt(month) - 1];
  const formattedDate = `${monthName} ${year}`;

  return formattedDate;
}
