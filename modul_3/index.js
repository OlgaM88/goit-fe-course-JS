const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

function checkLoginValidity(login) {
  if (login.length > 4 && login.length < 16){
    return true;
  }return false;
}
console.log(checkLoginValidity('njkl;'));

let checkIfLoginExists = function (logins, login) {
if (logins.includes(login)){
  return true;
}return false;
}
console.log(checkIfLoginExists(logins, "gfhgkhj,gj"));

let addLogin = function (logins, login) {
  let userLogin  = prompt("Введите свой логин");
if (!checkLoginValidity(userLogin)){
return console.log('Ошибка! Логин должен быть от 4 до 16 символов');
} else {
  if (!checkIfLoginExists(logins, userLogin)){
    logins.push(userLogin);
    return 
    console.log('Логин успешно добавлен!');
  }else {
    return 
    console.log('Такой логин уже используется!');
  }
}
}
console.log(addLogin(logins, 'Mango'));
