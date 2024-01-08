const sortingByAge = require("./app");

test("testing if the first user is Elon after sorting", () => {
  const sortedData = sortingByAge();

  expect(sortedData[0].name).toBe("Elon");
});

test("testing if the sorted data has length of 4", () => {
  const sortedData = sortingByAge();

  expect(sortedData).toHaveLength(4);
});
