const inputBoxes = document.querySelectorAll(".text-boxes");
const nameBox = document.querySelector("#name-box");
const emailBox = document.querySelector("#email-box");
const phoneNumberBox = document.querySelector("#phonenumber-box");
const messageBox = document.querySelector("#message-box");
const cancelBtn = document.querySelector("#cancel-btn");
const submitBtn = document.querySelector("#submit-btn");

let checkVar = 0;

cancelBtn.addEventListener("click", () => {
  inputBoxes.textContent = "";
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    nameBox.value === "" ||
    emailBox.value === "" ||
    phoneNumberBox.value === "" ||
    messageBox === ""
  ) {
    alert("all input boxes must be filled");
    checkVar = 0;
  } else {
    checkVar = 1;
  }

  if (messageBox.value.length > 100) {
    alert("message field cannot have more than 100 characters");
    checkVar = 0;
    messageBox.value = "";
    return;
  } else {
    checkVar = 1;
  }
  // checkPhone();

  for (const number of phoneNumberBox.value) {
    if (Number(number)) {
      checkVar = 1;
    } else {
      alert("phone number field must only contain numbers");
      phoneNumberBox.value = "";
      checkVar = 0;
      return;
    }
  }

  if (checkVar === 1) {
    alert("welcome user");
  }
});
