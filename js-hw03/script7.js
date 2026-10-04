const classrooms = [
  { name: "101", seats: 12, department: "Комп'ютерні науки" },
  { name: "102", seats: 18, department: "Дизайн" },
  { name: "201", seats: 15, department: "Комп'ютерні науки" },
  { name: "202", seats: 20, department: "Мережі та кібербезпека" },
  { name: "301", seats: 10, department: "Дизайн" }
];

function printClassrooms(list) {
  console.log("Список аудиторій");
  for (let i = 0; i < list.length; i++) {
    console.log("Аудиторія " + list[i].name + ": " + list[i].seats + " місць, Кафедра: " + list[i].department + "");
  }
}

function printByDepartment(list, departmentName) {
  console.log("\nАудиторії для кафедри " + departmentName + "");
  for (let i = 0; i < list.length; i++) {
    if (list[i].department.toLowerCase() === departmentName.toLowerCase()) {
      console.log("Аудиторія " + list[i].name + ": " + list[i].seats + " місць");
    }
  }
}

function printForGroup(list, group) {
  console.log("\nАудиторії для групи " + group.name + " (" + group.studentsCount + " студ., " + group.department + ")");
  for (let i = 0; i < list.length; i++) {
    if (list[i].department.toLowerCase() === group.department.toLowerCase() && list[i].seats >= group.studentsCount) {
      console.log("Підходить аудиторія " + list[i].name + " (" + list[i].seats + " місць)");
    }
  }
}

function sortBySeats(list) {
  const sorted = list.slice();

  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = 0; j < sorted.length - 1 - i; j++) {
      if (sorted[j].seats > sorted[j + 1].seats) {
        let temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }

  console.log("\nСортування за кількістю місць");
  printClassrooms(sorted);
  return sorted;
}

function sortByName(list) {
  const sorted = list.slice();

  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = 0; j < sorted.length - 1 - i; j++) {
      if (sorted[j].name > sorted[j + 1].name) {
        let temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }

  console.log("\nСортування за назвою");
  printClassrooms(sorted);
  return sorted;
}

console.log("АУДИТОРІЇ АКАДЕМІЇ");
printClassrooms(classrooms);

printByDepartment(classrooms, "Дизайн");

const group = {
  name: "КН-21",
  studentsCount: 14,
  department: "Комп'ютерні науки"
};
printForGroup(classrooms, group);

sortBySeats(classrooms);
sortByName(classrooms);
