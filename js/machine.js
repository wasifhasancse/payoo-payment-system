const userNumber = "01234567890";
const userPin = "1234";

function modalOpen(showInfo) {
  const modal = document.getElementById("my_modal_1");
  modal.querySelector(".modal-box p").textContent = showInfo;
  modal.showModal();
  return modal;
}

function getInputValue(id) {
  return document.getElementById(id).value;
}

function getBlance() {
  return parseFloat(document.getElementById("balance").textContent);
}

function setBlance(newBalance) {
  document.getElementById("balance").textContent = newBalance.toFixed(2);
}