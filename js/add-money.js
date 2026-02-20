document.getElementById("add-money-btn").addEventListener("click", function () {
  const bankSelect = document.getElementById("bank-select").value;
  const bankAccountNumber = document.getElementById("bank-account-number").value;
  const addMoneyAmount = document.getElementById("add-money-amount").value;
  const addMoneyPin = document.getElementById("add-money-pin").value;
  
  if (bankSelect === "Select Bank") {
    const modal = modalOpen("Please select a bank.");
    setTimeout(() => {
      modal.close();
    }, 3000);
    return;
  }
  
  if (bankAccountNumber === "" || bankAccountNumber.length !== 11) {
    const modal = modalOpen("Please enter a valid 11-digit account number.");
    setTimeout(() => {
      modal.close();
    }, 3000);
    return;
  }
  
  if (addMoneyAmount === "" || isNaN(addMoneyAmount) || parseFloat(addMoneyAmount) <= 0) {
    const modal = modalOpen("Please enter a valid amount.");
    setTimeout(() => {
      modal.close();
    }, 3000);
    return;
  }
  
  if (addMoneyPin === userPin) {
    const currentBalance = getBlance();
    const newBalance = currentBalance + parseFloat(addMoneyAmount);
    setBlance(newBalance);

    const modal = modalOpen(
      `Successfully added ${addMoneyAmount} BDT to your account.`,
    );
    setTimeout(() => {
      modal.close();
      document.getElementById("bank-select").value = "Select Bank";
      document.getElementById("bank-account-number").value = "";
      document.getElementById("add-money-amount").value = "";
      document.getElementById("add-money-pin").value = "";
    }, 3000);
    }
  else {
    const modal = modalOpen("Invalid PIN. Please enter your PIN.");
    setTimeout(() => {
      modal.close();
    }, 3000);
    return;
  }
});