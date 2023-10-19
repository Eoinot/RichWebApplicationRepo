let array = [];
function test2(userName){
    let divResult = document.getElementById("result");
    fetch("https://api.github.com/users/" + userName)
    .then((response) => response.json())
    .then((result) => {
        console.log(result)

        document.getElementById("result").innerHTML = `<img src = "${result.avatar_url}"/>
        <div class="user-details-div">
            <p class="output"> Name: ${result.name}</p>
            <p class="output"> UserName: ${result.login}</p>
            <p class="output"> Email: ${result.email}</p>
            <p class="output"> Location: ${result.location}</p>
            <p class="output"> Number of gits: ${result.public_gists}</p>
        </div>
        `

    })
    // array = json
    // alert(array[0].title);
    divResult.style.display = "block";
}

function getUserDetails(){
    userNameInput = document.getElementById("userName");
    userName = userNameInput.value.trim();
    results = test2(userName);
    console.log(results);
}
