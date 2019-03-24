// Code your solution here

function findMatching(drivers, string) {
  return drivers.filter(driver => (driver.charAt(0).toLowerCase() + driver.slice(1)) === (string.charAt(0).toLowerCase() + string.slice(1)))
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => driver.startsWith(string))
}

function matchName(drivers, string) {
  return drivers.filter(driver => driver.name === string)
}