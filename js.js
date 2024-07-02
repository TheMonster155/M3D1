const USER_NAME = "anass";
const PASSWORD = "1234";
const button = document.getElementById("btnLogin");
const password = document.getElementById("password");
const username = document.getElementById("userName");

const redirectToHome = () => {
  window.location.href = "./home.html";
};

const login = () => {
  const inputUsername = username.value.toLowerCase();
  const inputPassword = password.value.toLowerCase();
  if (inputUsername === USER_NAME && inputPassword === PASSWORD) {
    return true;
  } else {
    return false;
  }
};


button.addEventListener("click", () => {
    const  isValid = login();
    if (isValid === true) {
        redirectToHome();
    }  else {
        alert ("Password sbagliata")
    }
} )