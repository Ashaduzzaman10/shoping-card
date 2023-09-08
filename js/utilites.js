function getTextElementValueById(elementId) {
  const phoneTotalElement = document.getElementById("phone-total");
  const currentPhoneTotalString = phoneTotalElement.innerText;
  const currentPhoneTotal = parseInt(currentPhoneTotalString);
  return currentPhoneTotal;
}

function setTextElementById(elementId, value) {
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value;
}

function calculateSubTotal() {
  const currentPhoneTotal = getTextElementValueById("phone-total");
  const currentCaseTotal = getTextElementValueById("case-total");
  const currentSumTotal = currentCaseTotal + currentPhoneTotal;
  setTextElementById("sub-total", currentSumTotal);
  const taxAmountString = (currentSumTotal * 0.1).toFixed(2);
  const taxAmount = parseFloat(taxAmountString);
  setTextElementById("tax-amount", taxAmount);
  const finalAmount = currentSumTotal + taxAmount;
  setTextElementById("final-total", finalAmount);
}
