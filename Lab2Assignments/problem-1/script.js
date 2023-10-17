
let contacts = [];
let regex = /^[A-Za-z\s]*$/;
let emailSyntax ="@gmail.com";
class Contact {
    constructor(name, number, email) {
        this.name = name;
        this.number = number;
        this.email = email;
    }
}

function clearInput(nameInput,numberInput,emailInput){
      nameInput.value = "";
      numberInput.value = "";
      emailInput.value = "";
}

function addContact() {
    const nameInput = document.getElementById("name-input");
    const numberInput = document.getElementById("number-input");
    const emailInput = document.getElementById("email-input");
    const name = nameInput.value.trim();
    const number = numberInput.value.trim();
    const email = emailInput.value.trim();
    console.log(regex.test(name));
    // if(name.length > 20 || regex.test(name) == false){
    //   clearInput(nameInput,numberInput,emailInput);
    //   return(alert("name needs to be less than 20 charecters and must contain only letters and spaces"));
    // }
    // if(number.length != 10){
    //   clearInput(nameInput,numberInput,emailInput);
    //   return(alert("Contact Number needs to be exactly 10 digits in length"));
    // }
    // if(email.includes(emailSyntax) == false){
    //   clearInput(nameInput,numberInput,emailInput);
    //   return(alert("Them email you provided does not use proper email structure"));
    // }
    var temp = new Contact(name,number,email)
    contacts.push(temp);
    temp = "";
    clearInput(nameInput,numberInput,emailInput);
    displayTable(contacts);
}

function searchContacts(){
  var searchinput = document.getElementById("search-number-input");
  var search = searchinput.value.trim()
  let searchArray = [];

  alert(contacts.length)
  alert(contacts[1].number == search);
  for(var i = 0; i < contacts.length;i++){
    if(contacts[i].number == search){
      alert("worked");
      searchArray.push(contacts[i]);
    }
  }
  for(var i = 0; i < searchArray.length;i++){
    alert(contacts[i].number);
    
  }
  displayTable(searchArray);
}

function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    alert(switching)
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        // Check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
}
var count = 0
function displayTable(content) {
    var tbody = document.getElementById('tbody');
    var tr = "<tr>";
    if(count == 0){
      tr += "<th onclick=sortTable()>" + "Name" + "</th>" + "<th>" + "Number" + "</th>" + "<th>" + "Email" + "</th></tr>";
    }
    for (var i = count; i < content.length; i++) {
        
        tr += "<td>" + content[i].name + "</td>" + "<td>" + content[i].number.toString() + "</td>" + "<td>" +content[i].email.toString() + "</td></tr>";

        /* We add the table row to the table body */
        tbody.innerHTML += tr;
        
    }
    count = count+1;
}

