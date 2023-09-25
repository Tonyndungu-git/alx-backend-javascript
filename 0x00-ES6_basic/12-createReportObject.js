export default function createReportObject(employeesList) {
  const allEmployees = { ...employeesList };

  function getNumberOfDepartments(allEmployees) {
    return Object.keys(allEmployees).length;
  }

  return {
    allEmployees,
    getNumberOfDepartments,
  };
}
