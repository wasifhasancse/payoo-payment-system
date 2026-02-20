document.getElementById("cashout-btn").addEventListener("click", function () {
  const agentAccountNumber = document.getElementById("agent-account-number").value;
  const amount = Number(document.getElementById("cashout-amount").value);
  const cashoutPin = document.getElementById("cashout-pin").value;
  
  if (agentAccountNumber === "" || agentAccountNumber.length !== 11) {
    const modal = modalOpen("Please enter a valid 11-digit agent account number.");
    setTimeout(() => {
      modal.close();
    }, 3000);
    return;
  }
  if (amount === "" || isNaN(amount) || amount <= 0) {
    const modal = modalOpen("Please enter a valid amount.");
    setTimeout(() => {
      modal.close();
    }, 3000);
    return;
  }
  if (cashoutPin === userPin) {
    const currentBalance = getBlance();
    const newBalance = currentBalance - parseFloat(amount);
    setBlance(newBalance);

    const modal = modalOpen(
      `Successfully cashed out ${amount} BDT from your account.
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