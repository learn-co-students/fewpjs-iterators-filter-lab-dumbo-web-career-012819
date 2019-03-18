// Code your solution here
const findMatching = (array, name) => {
  return array.filter((item) => {
    return item.toLowerCase() === name.toLowerCase()
  })
}

const fuzzyMatch = (array, letters) => {
  return array.filter((item) => {
    return item.startsWith(letters)
  })
}

const matchName = (array, string) => {
  return array.filter((item) => {
    return item.name === string
  })
}
