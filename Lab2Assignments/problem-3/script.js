function API_UsernameDetails(userName){
    let divResult = document.getElementById("result");
    fetch("https://api.github.com/users/" + userName)
    .then((response) => response.json())
    .then((result) => {
        console.log(result)

        document.getElementById("result").innerHTML = `
            <img src = "${result.avatar_url}"/>
            <div class="divclass"> Name  ${result.name}</div>
            <div class="divclass">UserName  ${result.login}</div>
            <div class="divclass">Email  ${result.email}</div>
            <div class="divclass">Location  ${result.location}</div>
            <div class="divclass">Number of gits:  ${result.public_gists}</div>
        `

    })
    divResult.style.display = "block";
    //title.style.display = "block";
}

function API_UsernameReposList(userName){
    let divRepoList = document.getElementById("repo-list");
    let list = document.getElementById("repo-list");
    fetch("https://api.github.com/users/" + userName +"/repos")
    .then((response) => response.json())
    .then((resultRepo) => {
        console.log(resultRepo)
        console.log(resultRepo.length)

        let ul = `
        <div class="output-section-list-div">
        <p class="titleUserRepos">User Repos</p>
        <p class="titleUser">User Profile</p>
        <ul>${resultRepo.map(resultRepo => 
            `<li class="ul-line-row"> Name   ${resultRepo.name} 
                <br/>
                <br/>
                <br/>
                  Description  ${resultRepo.description} 
                <br/>
                <br/>
                <br/>
            </li>`).join('')}
             </ul>
             </div>`
            

        list.innerHTML = ul;

    })
    divRepoList.style.display = "block";
}

function getUserDetails(){
    userNameInput = document.getElementById("userName");
    userName = userNameInput.value.trim();
    userNameInput.value = "";
    API_UsernameDetails(userName);
    API_UsernameReposList(userName);
}
