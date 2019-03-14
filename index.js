const findMatching = (array, string) => {
  return array.filter(element => element.toLowerCase() == string.toLowerCase() );
};

const fuzzyMatch = (array, string) => {
  return array.filter(element => element.startsWith(string))
};

const matchName = (array, string) => {
  return array.filter(element => element.name == string)
};