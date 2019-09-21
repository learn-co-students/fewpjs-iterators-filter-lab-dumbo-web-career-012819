// Code your solution here
const findMatching = (array, drivers) => {
  return array.filter(driver => driver.toLowerCase() === drivers.toLowerCase())
}

const fuzzyMatch = (drivers, dname) => {
  let lengthOfName = dname.length;
  return drivers.filter(driver => driver.slice(0, lengthOfName) === dname)
}

const matchName = (drivers, dname) => {
  return drivers.filter(driver => driver.name === dname)
}