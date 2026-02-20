document.getElementById("add-money-btn").addEventListener("click", function () {
  const bankSelect = document.getElementById("bank-select").value;
  const accountNumber = document.getElementById("account-number").value;
  const amount = document.getElementById("amount").value;
  const pin = document.getElementById("pin").value;
  
  if (bankSelect === "Select Bank") { 
    const modal = modalOpen("Please select a bank.");
    setTimeout(() => {
      modal.close();
    }, 3000);
    
  }
  else {
    if (accountNumber === "" || accountNumber.length !== 11) {
      const modal = modalOpen("Please enter a valid 11-digit account number.");
      setTimeout(() => {
        modal.close();
      }, 3000);
    }
    else if (amount === "" || isNaN(amount) || parseFloat(amount) <= 0) {
      const modal = modalOpen("Please enter a valid amount.");
      setTimeout(() => {
        modal.close();
      }, 3000);
    }
    else if (pin === "") {
      const modal = modalOpen("Please enter your PIN.");
      setTimeout(() => {
        modal.close();
      }, 3000);
    }
    else {
      const currentBalance = getBlance();
      const newBalance = currentBalance + parseFloat(amount);
      setBlance(newBalance);
      
      const modal = modalOpen(`Successfully added ${amount} BDT to your account.`);
      setTimeout(() => {
        modal.close();
        document.getElementById("account-number").value = "";
        document.getElementById("amount").value = "";
        document.getElementById("pin").value = "";
        document.getElementById("bank-select").value = "Select Bank";
      }, 3000);
    }
  }
});