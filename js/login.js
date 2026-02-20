document.getElementById("login-btn").addEventListener("click", function () {
  const mobileNumber = getInputValue("mobile-number");
  const loginPin = getInputValue("pin");

  if (mobileNumber === userNumber && loginPin === userPin) {
    window.location.href = "./dashboard.html";
  } else {
    const modal = modalOpen("Invalid mobile number or pin. Please try again.");
    setTimeout(() => {
      modal.close();
      document.getElementById("pin").value = "";
    }, 3000);
  }
});
