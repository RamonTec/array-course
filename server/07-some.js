const number = [1, 2, 3, 4, 5];

let rta = false;

for (let index = 0; index < number.length; index++) {
  const element = number[index];
  if (element === 3) {
    rta = true;
    break;
  }
}

console.log('for', rta);

const rta2 = number.some((item) => item === 3);
console.log('some', rta2);

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const rta3 = dates.some((item) => item.startDate.getHours() === 10);
console.log('some', rta3);