let login = document.querySelector('.log'),
password = document.querySelector('.pass'),
btn = document.querySelector('.btn');

let getLogin,getPass;
btn.addEventListener("click", () => {
    getLogin = login.value;
    getPass = password.value;

    alert("Login: "+ getLogin + "\n" + "Password: " + getPass);

});
