
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

function searchContacts(n){
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search-number-input");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  let divResult = document.getElementById("noResult");


  var counter = tr.length-1;


  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[n];
    
    if (td) {
      
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        // count = count + 1
      } else {
        tr[i].style.display = "none"
        counter = counter-1
      }
      
    }
  }
  if(counter == 0 ){
    divResult.style.display = "block";
  }else{
    divResult.style.display = "none";
  }

}


function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;

  dir = "asc";
  while (switching) {

    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {

      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

var count = 0
function displayTable(content) {
    var tbody = document.getElementById('tbody');
    var tr = "<tr>";
    if(count == 0){
      tr += "<th onclick=sortTable(0)>" + "Name" + "</th>" + "<th>" + "Number" + "</th>" + "<th>" + "Email" + "</th></tr>";
    }
    for (var i = count; i < content.length; i++) {
        
        tr += "<td>" + content[i].name + "</td>" + "<td>" + content[i].number.toString() + "</td>" + "<td>" +content[i].email.toString() + "</td></tr>";

        tbody.innerHTML += tr;
        
    }
    count = count+1;
}

