// let findMatchhing = drivers.filter(driver => {
//
// })

function findMatching(drivers, driverName) {
  return drivers.filter(driver => {
    return driver.toLowerCase() === driverName.toLowerCase();
  })
}

function fuzzyMatch(drivers, str) {
  return drivers.filter(driver => {
    return driver.slice(0, str.length) === str;
  })
}

function matchName(drivers, str) {
  return drivers.filter(driver => {
    return driver.name === str
  })
}
