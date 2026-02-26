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

function getBalance() {
  return parseFloat(document.getElementById("balance").textContent);
}

function setBalance(newBalance) {
  document.getElementById("balance").textContent = newBalance.toFixed(2);
}

function addTransactionHistory(type, symbol, amount) {
  let historyContainer = document.getElementById("transaction-container");
  const transactionCard = document.createElement("div");
  transactionCard.className =
    "bg-base-100 border border-gray-300 rounded-lg h-full w-full p-2.5 flex items-center justify-between";
  transactionCard.innerHTML = `
    <div class="flex items-center gap-2.5">
      <div class="p-2.5 bg-base-300 rounded-full"><img src="./assets/opt-1.png" alt="Add Money"></div>
      <div class="text-left">
        <h3 id="transaction-card-title" class="text-lg font-semibold">${type}</h3>
        <p id="transaction-card-time" class="text-gray-600">${new Date().toLocaleString(
          "en-US",
          {
            timeZone: "Asia/Dhaka",
            dateStyle: "medium",
            timeStyle: "short",
          },
        )}</p>
      </div>
    </div>
    <div class="flex items-center gap-2.5">
      <div class="text-right">
        <p id="transaction-card-amount" class="text-gray-600"> ${symbol} $${Number(amount).toFixed(2)}</p>
      </div>
      <a href="#"><i class="fa-solid fa-ellipsis-vertical"></i></a>
    </div>
  `;
  historyContainer.appendChild(transactionCard);
}

function showCase(id) {
  const addMoney = document.getElementById("add-money");
  const cashout = document.getElementById("cashout");
  const transferMoney = document.getElementById("transfer-money");
  const getBonus = document.getElementById("get-bonus");
  const payBill = document.getElementById("pay-bill");
  const transactionHistory = document.getElementById("transaction-history");

  addMoney.classList.add("hidden");
  cashout.classList.add("hidden");
  transferMoney.classList.add("hidden");
  getBonus.classList.add("hidden");
  payBill.classList.add("hidden");
  transactionHistory.classList.add("hidden");

  const selectedSection = document.getElementById(id);
  selectedSection.classList.remove("hidden");
}