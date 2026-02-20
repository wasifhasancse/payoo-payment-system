document.getElementById("transfer-btn").addEventListener("click", function () { 
  const transferAccountNumber = document.getElementById("transfer-account-number").value;
  const transferAmount = Number(document.getElementById("transfer-amount").value);
  const transferPin = document.getElementById("transfer-pin").value;
  const currentBalance = getBalance();

  if (transferAccountNumber === "" || transferAccountNumber.length !== 11) {
    const modal = modalOpen("Please enter a valid 11-digit account number.");
    setTimeout(() => {
      modal.close();
    }, 3000);
    return;
  }
  if (
    transferAmount === "" ||
    isNaN(transferAmount) ||
    parseFloat(transferAmount) <= 0 ||
    parseFloat(transferAmount) > currentBalance
  ) {
    const modal = modalOpen("Please enter a valid amount.");
    setTimeout(() => {
      modal.close();
    }, 3000);
    return;
  }
  if (transferPin === userPin) {
    const newBalance = currentBalance - transferAmount;
    setBalance(newBalance);
    const modal = modalOpen(
      `Successfully transferred ${transferAmount} BDT to account number ${transferAccountNumber}.`,
    );  
    setTimeout(() => {
      modal.close();
      document.getElementById("transfer-account-number").value = "";
      document.getElementById("transfer-amount").value = "";
      document.getElementById("transfer-pin").value = "";
    }, 3000);
  } else {
    const modal = modalOpen("Invalid PIN. Please enter your PIN.");
    setTimeout(() => {
      modal.close();
    }, 3000);
    return;
  }
});