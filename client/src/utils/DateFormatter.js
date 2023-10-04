// Input date string


export default function dateformat(inputDateStr){

// Parse the input date string into a JavaScript Date object
const inputDate = new Date(inputDateStr);

// Create an array of month names
const monthNames = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

// Get the month, day, and year from the Date object
const month = monthNames[inputDate.getMonth()];
const day = inputDate.getDate();
const year = inputDate.getFullYear();

// Create the formatted date string
const formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;// Output: "October 2, 2023"
}