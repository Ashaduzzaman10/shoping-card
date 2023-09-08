function updatePhoneNumber(isIncrease) {
  const phoneNumberField = document.getElementById("phone-number-field");
  const phoneNumberFieldString = phoneNumberField.value;
  const previousPhoneNumber = parseInt(phoneNumberFieldString);
  let newPhoneNumber;
  if (isIncrease === true) {
     newPhoneNumber = previousPhoneNumber + 1;
  } else {
    newPhoneNumber = previousPhoneNumber - 1;
  }
  phoneNumberField.value = newPhoneNumber;
  console.log(phoneNumberField);
  return newPhoneNumber;
}
document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    updatePhoneNumber(true);
  });


document.getElementById("btn-phone-minus").addEventListener("click", function () {
  updatePhoneNumber(false);
})