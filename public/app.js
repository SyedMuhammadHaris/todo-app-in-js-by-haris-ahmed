var list = document.getElementById("list");

// console.log(firebase);

firebase.database().ref('todos').on('child_added',function(data){
   // console.log(data.val());

   // if(todoItem.value == ""){
   //          alert("Please Enter valid Input :");
   //       }
         // else{
        var listElement = document.createElement('li');
      //   var listText = document.createTextNode(todoItem.value);

      // here we get the data from firebase and render in ui
        var listText = document.createTextNode(data.val().value);

        listElement.setAttribute("class","lists");
         listElement.appendChild(listText);
         list.appendChild(listElement);
      //    console.log(list);

         //Delete Button functionality

         var delteBtn = document.createElement("button");
         var delText = document.createTextNode("Delete");
         delteBtn.setAttribute("id" , data.val().key);
         delteBtn.setAttribute("onclick","delListItem(this)");
         delteBtn.setAttribute("class","buttons");
         delteBtn.appendChild(delText);
         listElement.appendChild(delteBtn);
         list.appendChild(listElement);
      
         //Edit Button functionality 
      
         var editBtn = document.createElement("button");
         var editText = document.createTextNode("Edit");
         editBtn.setAttribute("id", data.val().key);
         editBtn.setAttribute("onclick","editButton(this)");
         editBtn.setAttribute("class","buttons");
         editBtn.appendChild(editText);
         listElement.appendChild(editBtn);
         list.appendChild(listElement);
         
        
         // }
})

function addTodo(){
   var todoItem = document.getElementById("todoitem");
   // console.log(todoItem.value);

   var database =  firebase.database().ref('todos');
   var key = database.push().key;
   var todo = {
        value : todoItem.value,
        key : key
   }
   database.child(key).set(todo);
   todoItem.value = "";

   // console.log(key);


//    if(todoItem.value == ""){
//       alert("Please Enter valid Input :");
//    }
//    else{
//   var listElement = document.createElement('li');
//   var listText = document.createTextNode(todoItem.value);
//   listElement.setAttribute("class","lists");
//    listElement.appendChild(listText);
//    list.appendChild(listElement);
// //    console.log(list);
//         //Delete Button functionality
//    var delteBtn = document.createElement("button");
//    var delText = document.createTextNode("Delete");
//    delteBtn.setAttribute("onclick","delListItem(this)");
//    delteBtn.setAttribute("class","buttons");
//    delteBtn.appendChild(delText);
//    listElement.appendChild(delteBtn);
//    list.appendChild(listElement);

//    //Edit Button functionality 

//    var editBtn = document.createElement("button");
//    var editText = document.createTextNode("Edit");
//    editBtn.setAttribute("onclick","editButton(this)");
//    editBtn.setAttribute("class","buttons");
//    editBtn.appendChild(editText);
//    listElement.appendChild(editBtn);
//    list.appendChild(listElement);
   
//    todoItem.value = "";
   // }

  
   
    
}
function delListItem(x){
   // console.log(x.id);
     firebase.database().ref('todos').child(x.id).remove();
   x.parentNode.remove();
}
function editButton(x){
   //  console.log(x.id);
    var editValue =  prompt("Update Todo list : ", x.parentNode.firstChild.nodeValue);
    var editTodo = {
       value : editValue,
       key : x.id
    }
   //  console.log(editTodo);

    firebase.database().ref('todos').child(x.id).set(editTodo);

    x.parentNode.firstChild.nodeValue = editValue;
 
}

function delteAll(){
   var adaRef = firebase.database().ref('todos');
adaRef.remove()
.then(function() {
   console.log("Remove succeeded.")
 })
 .catch(function(error) {
   console.log("Remove failed: " + error.message)
 });
    list.innerHTML = "";
}