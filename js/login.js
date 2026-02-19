document.getElementById("login-btn").addEventListener("click", function () {
  userNumber = "01234567890";
  userPin = "1234";
  const mobileNumber = getInputValue("mobile-number");
  const pin = getInputValue("pin");

  function modalOpen() {
    const modal = document.getElementById("my_modal_1");
    modal.querySelector(".modal-box p").textContent =
      "Invalid mobile number or pin. Please try again.";
    modal.showModal();
    return modal;
  }

  if (mobileNumber === userNumber && pin === userPin) {
    window.location.href = "./dashboard.html";
  } else {
    const modal = modalOpen();
    setTimeout(() => {
      modal.close();
    }, 3000);
  }
});
