const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

function checkLoginValidity(login) {
  return login.length >= 4 && login.length <= 16
}

let checkIfLoginExists = function (logins, login) {
return logins.includes(login)
}

let addLogin = function() {
  let userLogin  = prompt("Введите свой логин");
if (!checkLoginValidity(userLogin)){
return alert('Ошибка! Логин должен быть от 4 до 16 символов');
} else {
  if (!checkIfLoginExists(logins, userLogin)){
    logins.push(userLogin);
    return alert ('Логин успешно добавлен!');
  }else if (checkIfLoginExists(logins, userLogin)) {
    return alert ('Такой логин уже используется!');
  }
}
}
addLogin();
console.log(logins);
