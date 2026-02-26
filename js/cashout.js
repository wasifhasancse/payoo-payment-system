document.getElementById("cashout-btn").addEventListener("click", function () {
  const agentAccountNumber = document.getElementById(
    "agent-account-number",
  ).value;
  const cashOutAmount = Number(document.getElementById("cashout-amount").value);
  const cashoutPin = document.getElementById("cashout-pin").value;
  const currentBalance = getBalance();

  if (agentAccountNumber === "" || agentAccountNumber.length !== 11) {
    const modal = modalOpen(
      "Please enter a valid 11-digit agent account number.",
    );
    setTimeout(() => {
      modal.close();
    }, 3000);
    return;
  }
  if (
    cashOutAmount === "" ||
    isNaN(cashOutAmount) ||
    parseFloat(cashOutAmount) <= 0 ||
    parseFloat(cashOutAmount) > currentBalance
  ) {
    const modal = modalOpen("Please enter a valid amount.");
    setTimeout(() => {
      modal.close();
    }, 3000);
    return;
  }
  
  if (cashoutPin === userPin) {
    const newBalance = currentBalance - parseFloat(cashOutAmount);
    setBalance(newBalance);
    addTransactionHistory("Cash Out", "-", cashOutAmount);
    const modal = modalOpen(
      `Successfully cashed out ${cashOutAmount} BDT from your account.
      Agent Account Number: ${agentAccountNumber}`,
    );
    setTimeout(() => {
      modal.close();
      document.getElementById("agent-account-number").value = "";
      document.getElementById("cashout-amount").value = "";
      document.getElementById("cashout-pin").value = "";
    }, 3000);
  } else {
    const modal = modalOpen("Invalid PIN. Please enter your PIN.");
    setTimeout(() => {
      modal.close();
    }, 3000);
  }
});
