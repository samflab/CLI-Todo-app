var readlineSync = require("readline-sync");

var i = 0, arr = [];
//1. Welcoming the user
function welcome() {
  console.log("Hi! Your TODO List here");
  var username = readlineSync.question("Please share your name with me : ");
  console.log("Hi " + username + "!");
}

//2. List of commands
function todoCommands() {
  console.log("Here's a list of things you can do here:");
  console.log("1. Add your todo to the list");
  console.log("2. Show all your todos");
  console.log("3. Delete a todo from your list");

  var optionNumber = readlineSync.question("Type the option number: ");
  switch (optionNumber) {
    case '1' || '1.':
      add();
      break;
    case '2' || '2.':
      show();
      break;
    case '3'||'3.':
      deleteItems();
      break;
    default:
      console.log("Undefined option");
      break;
  }
}

//3. Adding a items to the list
function add() {
  var itemNumber = readlineSync.question("Type in your pending work! How many items do you want add? ");
  for (i = 0; i < itemNumber; i++) {
    var item = readlineSync.question("Inserting: ");
    if(item == ""){
      console.log("Empty value can't be inserted.")
    }
    arr.push(item);
  }
  console.log("-----------------");
  console.log("Added items successfully!");
  show();
  todoCommands();
}

//4. Show all the items
function show() {
  if(arr.length == 0){
    console.log("Oops, your list is empty. Please add some items.");
    console.log("----------------------");
    todoCommands();
  }
  console.log("Your todo list is as follows:\n");
  console.log("----------------");
  for(i = 0; i<arr.length; i++ ){
    console.log(i + "." + arr[i] + "\n");
  }
  console.log("----------------");
  todoCommands();
}

//5. Delete an item
function deleteItems() {
  if(arr.length == 0){
    console.log("Oops, your list is empty. Please add some items.");
    console.log("----------------------");
    todoCommands();
  }
  var itemIndex = readlineSync.question("Specify the array index: ");
  console.log("----------------");
  arr.splice(itemIndex, 1);
  console.log("Items deleted successfully!");
  show();
  todoCommands();
}

welcome();
todoCommands();
