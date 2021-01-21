// []
// every = true & true =>
// some = true & false => true

const employees = [
  {
    name: 'Jane Doe',
    salary: 90000,
  },
  {
    name: 'Donal Jones',
    salary: 65000,
  },
  {
    name: 'Donna Applessed',
    salary: 1500000,
  },
  {
    name: 'John Smith',
    salary: 250000,
  } 
]
const moreThanOneMillion = employee => employee.salary > 1000000;
const millionResult = employees.some(moreThanOneMillion);
// console.log("🚀 ~ file: everySome.js ~ line 26 ~ millionResult", millionResult)
// true

// Validate form
const formValues = [
  'Shaun',
  'Wassell',
  'Maine',
  ''
]

// Make sure every field is not empty
const isNotEmpty = string => !!string;

const allFieldsFilled = formValues.every(isNotEmpty); 
