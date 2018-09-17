const refs = {
     searchForm: document.querySelector(".search-form"),
     addForm: document.querySelector(".add-form"),
     input: document.querySelector("input"),
     postBtn: document.querySelector(".js-post"),
     postBtnAll: document.querySelector(".js-post-more"),
     btnAdd: document.querySelector(".js-add"),
     deleteBtn: document.queryCommandValue(".js-delete"),
     resultSearchForm: document.querySelector(".result-search-form"),
     inputName: document.querySelector(".name"),
     inputAge: document.querySelector(".age"),
     btnEdit: document.querySelector(".js-edir"),
     baseUrl: "https://test-users-api.herokuapp.com/users/"
}
refs.searchForm.addEventListener('click', searchFormEvent);

function searchFormEvent(evt){
    evt.preventDefault();
    let target = evt.target;
    if (target.nodeName !== 'BUTTON') return;
    switch(true){
    case(target.classList.contains('js-post')) : {
        return getUserById();
        break}
    case(target.classList.contains('js-post-more')):{
        return getAllUsers();
        break}
    case(target.classList.contains('js-delete')):{
        return removeUser();
        break}

    }
}
function getAllUsers(evt) {
 
    fetch(refs.baseUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Custom-Header': 'custom value'
      }
    })
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(`Error while fetching data: ${response.statusText}`);
    })
    .then(data => updateViewList(data))
    .catch(error => console.log("Error: " + error));
  }


  function getUserById(){
    
    const id = refs.input.value;
    fetch(`${refs.baseUrl}${id}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Custom-Header': 'custom value'
      }
    })
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(`Error while fetching data: ${response.statusText}`);
    })
    .then(data => {
        let user = data.data;
        refs.resultSearchForm.innerHTML =`
           <p>ID: ${user.id} </p>
           <p>Name: ${user.name}</p>
           <p>Age: ${user.age}</p>`;
    })
    .catch(error => console.log("Error: " + error));
  }

  function removeUser(){
    
    let id = refs.input.value;
    fetch(`${refs.baseUrl}${id}`, {
        method: "DELETE"})
    .then(response => {
            if (response.ok) return response.json();
            throw new Error(`Error while fetching data: ${response.statusText}`);
          })
    .then(data =>{ 
        let user = data.data;
        refs.resultSearchForm.innerHTML = 
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
      return addUser();
      break}
      case(target.classList.contains('js-edit')):{
      return updateUser();
      break}
        }
    }
function addUser(){
    const name = refs.inputName.value;
    const age = refs.inputAge.value;
    if (name.length < 2 && (age.length !== 0 || age !== string)) return;
    fetch(refs.baseUrl, {
        method: 'POST',
        body: JSON.stringify({name, age}),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => {
        if (response.ok) return response.json();
        throw new Error(`Error while fetching data: ${response.statusText}`);
      })
      .then(data =>{ 
        let user = data.data;
        refs.resultSearchForm.innerHTML = 
        `User was adedd
        <p> Id : ${user._id}</p>
        <p> Name : ${user.name}</p>
        <p> Age : ${user.age}</p>`
     })
      .catch(error => console.log("Error: " + error));
    }
  
function updateUser(){
        let id = refs.input.value;
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
        .then(data =>{ 
          let user = data.data;
          refs.resultSearchForm.innerHTML = 
          `User by ${user.id} has been updated
          <p> Id : ${user.id}</p>
          <p> Name : ${user.name}</p>
          <p> Age : ${user.age}</p>`
       })
        .catch(error => console.log("Error: " + error));
        
} 
function updateViewList(obj){
        let elem = obj.data;
         refs.resultSearchForm.innerHTML = ` <table>
    <tr><th>ID</th><th>NAME</th><th>AGE</th></tr>
    <tbody></tbody></table>`;
    const tbody = document.querySelector('tbody');
     elem.map(el => {
     let item = `<tr>
       <td>${el.id}</td>
       <td>${el.name}</td>
       <td>${el.age}</td>
        </tr>`;
      tbody.innerHTML += item;
     });
  }
