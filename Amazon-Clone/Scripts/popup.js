const Category = [
  ".cloth",
  ".health",
  ".furniture",
  ".phone",
  ".cosmetics",
  ".petcare",
  ".toys",
  ".fasion",
];
Category.forEach((value) => {
  document.querySelector(`${value}`).addEventListener("click", () => {
    document.querySelector(`${value}-section`).classList.add("visible");
  });
});

Category.forEach((value) => {
  document.querySelector(`${value}-back`).addEventListener("click", () => {
    document.querySelector(`${value}-section`).classList.remove("visible");
  });
});