const refs = {
     form: document.querySelector(".search-form"),
     addForm: document.querySelector(".add-form"),
     input: document.querySelector("input"),
     postBtn: document.querySelector(".js-post"),
     postBtnAll: document.querySelector(".js-post-all"),
     btnAdd: document.querySelector(".js-add"),
     deleteBtn: document.queryCommandValue(".js-delete"),
     result: document.querySelector(".result"),
     inputName: document.querySelector(".name"),
     inputAge: document.querySelector(".age"),
     btnEdit: document.querySelector(".js-edir"),
     baseUrl: "https://test-users-api.herokuapp.com/users/"
}
refs.form.addEventListener('click', searchFormEvent);

function searchFormEvent(evt){
    evt.preventDefault();
    let target = evt.target;
    let data = refs.input.value;
    if (target.nodeName !== 'BUTTON') return;
    switch(true){
    case(target.classList.contains('js-post')) : {
        return getUserById(id);
        break}
    case(target.classList.contains('js-post-all')):{
        return getAllUsers();
        break}
    case(target.classList.contains('js-delete')):{
        return removeUser(id);
        break}

    }
}
function getAllUsers(evt) {
    evt.preventDefault();
    fetch(refs.baseUrl)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(`Error while fetching data: ${response.statusText}`);
    })
    .then(data => updateViewList(data))
    .catch(error => console.log("Error: " + error));
  }


  function getUserById(id){
    evt.preventDefault();
    fetch(`${refs.baseUrl}${id}`)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(`Error while fetching data: ${response.statusText}`);
    })
    .then(data => {
        let user = data.data;
        refs.result.innerHTML =`
           <p>ID: ${user.id} </p>
           <p>Name: ${user.name}</p>
           <p>Age: ${user.age}</p>`;
    })
    .catch(error => console.log("Error: " + error));
  }

  function removeUser(id){
    evt.preventDefault();
    fetch(`${refs.baseUrl}${id}`, {
        method: "DELETE"})
    .then(response => {
            if (response.ok) return response.json();
            throw new Error(`Error while fetching data: ${response.statusText}`);
          })
    .then(data =>{ 
        let user = data.data;
        refs.result.innerHTML = 
        `User by ${user.id} has been deleted
        <p> Id : ${user.id}</p>
        <p> Name : ${user.name}</p>
        <p> Age : ${user.age}</p>`
     })
     .catch(error => console.log("Error: " + error));
  }

refs.addForm.addEventListener('click', addFormEvent)

function addFormEvent(evt){ 
     evt.preventDefault();
      let target = evt.target;
       
      if (target.nodeName !== 'BUTTON') return;
      switch(true){
      case(target.classList.contains('js-add')) : {
      return addUser(name, age);
      break}
      case(target.classList.contains('js-edit')):{
      return updateUser(id, user);
      break}
        }
    }
function addUser(name, age){
    const userName = refs.inputName.value;
    const userAge = refs.inputAge.value;
    if (userName.length < 2 && (userAge.length === 0 || userAge == string)) return;
    fetch(refs.baseUrl, {
        method: 'POST',
        body: JSON.stringify({name: userName, age: userAge}),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => {
        if (response.ok) return response.json();
        throw new Error(`Error while fetching data: ${response.statusText}`);
      })
      .catch(error => console.log("Error: " + error));
    }
  
function updateUser(id, user){
        evt.preventDefault();
        const userName = refs.inputName.value;
        const userAge = refs.inputAge.value;
       const user = {
            name: userName,
            age: userAge,
        }
        fetch(`${refs.baseUrl}${id}`, {
            method: "PUT", 
            body: JSON.stringify(user),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }})
        .then(response => {
                if (response.ok) return response.json();
                throw new Error(`Error while fetching data: ${response.statusText}`);
              })
        .catch(error => console.log("Error: " + error));
        
} 
function updateViewList(obj){
        let elem = obj.elem;
         result.innerHTML = `<table>`;
         const tbody = document.querySelector('tbody');
         elem.forEach(el => {
          let item = `<tr>
            <td>${el.id}</td>
            <td>${el.name}</td>
            <td>${el.age}</td>
             </tr>`;
          result.innerHTML += item;
          });
          result.innerHTML += `</table>`

  }