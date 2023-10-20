let array = [];
function API(userName){
    let divResult = document.getElementById("result");
    let divRepoList = document.getElementById("repo-list");
    fetch("https://api.github.com/users/" + userName)
    .then((response) => response.json())
    .then((result) => {
        console.log(result)

        document.getElementById("result").innerHTML = `
        <div class="user-details-div"> 
            <p class="titleUser">User Profile</p>
            <img src = "${result.avatar_url}"/>
            <p class="output"> Name: ${result.name}</p>
            <p class="output"> UserName: ${result.login}</p>
            <p class="output"> Email: ${result.email}</p>
            <p class="output"> Location: ${result.location}</p>
            <p class="output"> Number of gits: ${result.public_gists}</p>
        </div>
        `

    })

    let list = document.getElementById("repo-list");
    fetch("https://api.github.com/users/" + userName +"/repos")
    .then((response) => response.json())
    .then((resultRepo) => {
        console.log(resultRepo)
        console.log(resultRepo.length)

        let ul = `
        <p class="titleUserRepos">User Repos</p>
        <ul>${resultRepo.map(resultRepo => 
            `<li class="ul-line-row"> Name:   ${resultRepo.name} 
                <br/>
                <br/>
                <br/>
                  Description:  ${resultRepo.description} 
                <br/>
                <br/>
                <br/>
            </li>`).join('')}
             </ul>`;

        list.innerHTML = ul;

    })
    divResult.style.display = "block";
    divRepoList.style.display = "block";
}

function getUserDetails(){
    userNameInput = document.getElementById("userName");
    userName = userNameInput.value.trim();
    results = API(userName);
}
