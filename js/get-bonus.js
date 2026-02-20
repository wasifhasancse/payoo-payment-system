const newYearBonus = "NY2024"; 

document.getElementById("bonus-btn").addEventListener("click", function () {
  const bonusCoupon = document.getElementById("bonus-coupon-code").value;

  if(bonusCoupon === newYearBonus) {
    const modal = modalOpen("Congratulations! You have received a bonus of $10.00.");
    setTimeout(() => {
      modal.close();
    }, 3000);
    let currentBalance = getBalance();
    setBalance(currentBalance + 10.0);
    document.getElementById("bonus-coupon-code").value = "";
  } else {
    const modal = modalOpen("Invalid bonus coupon code.");
    setTimeout(() => {
      modal.close();
    }, 3000);
  }
});