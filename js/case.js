document.getElementById("btn-case-plus").addEventListener("click", function () {
  const caseNumberField = document.getElementById("case-number-field");
  const caseNumberFieldString = caseNumberField.value;
  const caseNumber = parseInt(caseNumberFieldString);
  const newCaseNumber = caseNumber + 1;
  caseNumberField.value = newCaseNumber;
  console.log(newCaseNumber);
});
document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const caseNumberField = document.getElementById("case-number-field");
    const caseNumberFieldString = caseNumberField.value;
    const caseNumber = parseInt(caseNumberFieldString);
    const newCaseNumber = caseNumber - 1;
    caseNumberField.value = newCaseNumber;
    console.log(newCaseNumber);
  });
