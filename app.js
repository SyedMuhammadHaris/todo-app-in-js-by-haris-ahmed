var list = document.getElementById("list");


function addTodo(){
   var todoItem = document.getElementById("todoitem");
   if(todoItem.value == ""){
      alert("Please Enter valid Input :");
   }
   else{
  var listElement = document.createElement('li');
  var listText = document.createTextNode(todoItem.value);
  listElement.setAttribute("class","lists");
   listElement.appendChild(listText);
   list.appendChild(listElement);
//    console.log(list);
        //Delete Button functionality
   var delteBtn = document.createElement("button");
   var delText = document.createTextNode("Delete");
   delteBtn.setAttribute("onclick","delListItem(this)");
   delteBtn.setAttribute("class","buttons");
   delteBtn.appendChild(delText);
   listElement.appendChild(delteBtn);
   list.appendChild(listElement);

   //Edit Button functionality 

   var editBtn = document.createElement("button");
   var editText = document.createTextNode("Edit");
   editBtn.setAttribute("onclick","editButton(this)");
   editBtn.setAttribute("class","buttons");
   editBtn.appendChild(editText);
   listElement.appendChild(editBtn);
   list.appendChild(listElement);
   
   todoItem.value = "";
   }

  
   
    
}
function delListItem(x){
   x.parentNode.remove();
}
function editButton(x){
    
    var editValue =  prompt("Update Todo list : ", x.parentNode.firstChild.nodeValue);
    x.parentNode.firstChild.nodeValue = editValue;
 
}

function delteAll(){
    list.innerHTML = "";
}