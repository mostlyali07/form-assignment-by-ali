var list = document.getElementById("todo-list");
var arr = [];
var todoList = localStorage.getItem("todo-list");
if (todoList) {
  arr = JSON.parse(todoList);
}
function loadAllTodo() {
  list.innerHTML = "";
  for (var i = 0; i < arr.length; i++) {
    var li = `
    <li> ${arr[i]} 
    <button onclick="deleteOne('${i}')">Del</button>
    <button onclick="editTodo('${arr[i]}','${i}')">Edit</button> 
    </li>
    `;
    list.innerHTML += li;
  }
}
loadAllTodo();

function submitData() {
  var myName = document.getElementById("my-name");
  var fName = document.getElementById("f-name");
  var myCity = document.getElementById("my-city");
  if (myName.value.trim() !== "") {
    // var li = `
    //      ${myName.value} 
    // <button onclick="deleteOne('${arr.length}')">Del</button>
    // <button onclick="editTodo('${myName.value}','${arr.length}')">Edit</button>
    // `;
    arr.push(myName.value);
    arr.push(fName.value);
    arr.push(myCity.value);
    localStorage.setItem("your-data", JSON.stringify(arr));
    // list.innerHTML += li;
    // myName.fName.value = "";
    // myName.fName.focus();
  }
  // var fName = document.getElementById("f-name");
  // if (fName.value.trim() !== "") {
  //   var li = `
  //   <li> ${fName.value} 
  //   <button onclick="deleteOne('${arr.length}')">Del</button>
  //   <button onclick="editTodo('${fName.value}','${arr.length}')">Edit</button> 
  //   </li>
  //   `;
  //   arr.push(fName.value);
  //   localStorage.setItem("f-name", JSON.stringify(arr));
  //   list.innerHTML += li;
  //   fName.value = "";
  //   fName.focus();
  // }
}

function deleteAll() {
  list.innerHTML = "";
  localStorage.removeItem("todo-list");
}

function deleteOne(i) {
  console.log(i);
  arr.splice(i, 1);
  localStorage.setItem("todo-list", JSON.stringify(arr));
  event.target.parentNode.remove();
  loadAllTodo();
}

function editTodo(a, i) {
  var oldValue = prompt("Enter updated value", a);
  if (oldValue) {
    arr.splice(i, 1, oldValue);
    localStorage.setItem("todo-list", JSON.stringify(arr));
    event.target.parentNode.firstChild.nodeValue = oldValue;
  }
}
