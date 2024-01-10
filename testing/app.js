const users = [
  {
    name: "Simran",
    age: 30,
  },
  {
    name: "Akshay",
    age: 28,
  },
  {
    name: "Sachin",
    age: 50,
  },
  {
    name: "Elon",
    age: 8,
  },
];

function sortingByAge() {
  const data = users.sort((a, b) => a.age - b.age);
  return data;
}

console.log(sortingByAge());

module.exports = sortingByAge;
