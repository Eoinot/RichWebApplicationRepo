let array = [];
function test2(userName){
    let test = fetch("https://api.github.com/users/" + userName)
    .then(response => response.json())
    return(test)
    // array = json
    // alert(array[0].title);
}

function getUsername(){
    userNameInput = document.getElementById("userName");
    userName = userNameInput.value.trim();
    results = test2(userName);
    console.log(results);
}