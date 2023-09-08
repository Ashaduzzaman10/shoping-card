function updateCaseNumber(isIncrease) {
  const caseNumberField = document.getElementById("case-number-field");
  const caseNumberFieldString = caseNumberField.value;
  const caseNumber = parseInt(caseNumberFieldString);
  let newCaseNumber;
  if (isIncrease === true) {
    newCaseNumber = caseNumber + 1;
  } else {
    newCaseNumber = caseNumber - 1;
  }
  caseNumberField.value = newCaseNumber;
  console.log(newCaseNumber);
}
document.getElementById("btn-case-plus").addEventListener("click", function () {
  updateCaseNumber(true);
});
document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    updateCaseNumber(false);
  });
