export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const item of reportWithIterator) {
    for (const employee of item[1]) {
      result += employee + ' | ';
    }
  }

  // Remove the trailing ' | ' from the string
  result = result.slice(0, -3);

  return result;
}
