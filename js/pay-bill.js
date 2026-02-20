document.getElementById("pay-bill-btn").addEventListener("click", function () { 
  const payBillSelect = document.getElementById("pay-bill-select").value;
  const billerAccountNumber = document.getElementById("biller-account-number").value;
  const payBillAmount = document.getElementById("pay-bill-amount").value;
  const payBillPin = document.getElementById("pay-bill-pin").value;
  const currentBalance = getBalance();
  
  if (payBillSelect === "Select biller to pay") {
    const modal = modalOpen("Please select a biller to pay.");
    setTimeout(() => {
      modal.close();
    }, 3000);
    return;
  }
  if (billerAccountNumber === "" || billerAccountNumber.length !== 11) {
    const modal = modalOpen("Please enter a valid 11-digit biller account number.");
    setTimeout(() => {
      modal.close();
    }, 3000);
    return;
  }
  if (payBillAmount === "" || isNaN(payBillAmount) || parseFloat(payBillAmount) <= 0 || parseFloat(payBillAmount) > currentBalance) {
    const modal = modalOpen("Please enter a valid amount.");
    setTimeout(() => {
      modal.close();
    }, 3000);
    return;
  }
  if (payBillPin === userPin) {
    const newBalance = currentBalance - parseFloat(payBillAmount);
    setBalance(newBalance);
    const modal = modalOpen(
      `Successfully paid ${payBillAmount} BDT to ${payBillSelect}.`,
    );  
    setTimeout(() => {
      modal.close();
      document.getElementById("pay-bill-select").value = "Select biller to pay";
      document.getElementById("biller-account-number").value = "";
      document.getElementById("pay-bill-amount").value = "";
      document.getElementById("pay-bill-pin").value = "";
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