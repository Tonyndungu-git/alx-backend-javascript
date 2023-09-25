export default function createIteratorObject(report) {
  let employees = [];

  for (const dept in report.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, dept)) {
      employees = employees.concat(report.allEmployees[dept]);
    }
  }

  let index = 0;

  return {
    next() {
      if (index < employees.length) {
        const value = employees[index];
        index += 1;
        return { value, done: false };
      }
      return { done: true };
    },
    [Symbol.iterator]() {
      let innerIndex = 0;
      return {
        next() {
          if (innerIndex < employees.length) {
            const value = employees[innerIndex];
            innerIndex += 1;
            return { value, done: false };
          }
          return { done: true };
        },
      };
    },
  };
}
