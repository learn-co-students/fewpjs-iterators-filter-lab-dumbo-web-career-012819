// Code your solution here

function findMatching(driver, name) {
  return driver.filter(d => {
    return d.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(driver, string) {
  return driver.filter(d => {
    return d.slice(0, string.length) === string;
  });
}

function matchName(driver, name) {
  return driver.filter(d => {
    return d.name  === name
  });
}
