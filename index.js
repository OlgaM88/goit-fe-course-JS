const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';

let  userLogin = prompt('Введите ваш логин');

if (userLogin == null){
    alert('Отменено пользователем!');

}else if (userLogin !== ADMIN_LOGIN ) {
    alert ('Доступ запрещен!');
} else if (userLogin === ADMIN_LOGIN) {
   let userPass = prompt ('Введите свой пароль');
   if (userPass == null){
       alert('Отменено пользователем!');
   }else if (userPass !==ADMIN_PASSWORD){
    alert ('Доступ запрещен!');
   } else if (userPass === ADMIN_PASSWORD){
     alert('Добро пожаловать!');
   }}