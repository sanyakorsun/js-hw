class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }

  getHtml() {
    let rows = this.employees
      .map(
        (emp, index) =>
          `  <tr>
    <td>${index + 1}</td>
    <td>${emp.name}</td>
    <td>${emp.position}</td>
    <td>$${emp.salary}</td>
  </tr>`
      )
      .join('\n');

    return `<table>
  <thead>
    <tr>
      <th>#</th>
      <th>ПІБ</th>
      <th>Посада</th>
      <th>Зарплата</th>
    </tr>
  </thead>
  <tbody>
${rows}
  </tbody>
</table>`;
  }
}

const bankEmployees = [
  new Employee("Олександр Усик", "Менеджер", 25000),
  new Employee("Ліонель Мессі", "Касир", 18000),
  new Employee("Дональд Трамп", "Прибиральник", 15000)
];

const empTable = new EmpTable(bankEmployees);
console.log(empTable.getHtml());



class StyledEmpTable extends EmpTable {
  getStyles() {
    return `<style>
  table {
    width: 100%;
    border-collapse: collapse;
    font-family: Arial, sans-serif;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px 12px;
    text-align: left;
  }
  th {
    background-color: #4CAF50;
    color: white;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
</style>`;
  }

  getHtml() {
    return `${this.getStyles()}\n${super.getHtml()}`;
  }
}

const styledEmpTable = new StyledEmpTable(bankEmployees);
console.log(styledEmpTable.getHtml());
