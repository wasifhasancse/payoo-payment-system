document.getElementById("login-btn").addEventListener("click", function () {
  userNumber = "01234567890";
  userPin = "1234";
  const mobileNumber = getInputValue("mobile-number");
  const pin = getInputValue("pin");

  if (mobileNumber === userNumber && pin === userPin) {
    window.location.href = "./dashboard.html";
  } else {
    const modal = modalOpen("Invalid mobile number or pin. Please try again.");
    setTimeout(() => {
      modal.close();
      document.getElementById("pin").value = "";
    }, 3000);
  }
});
