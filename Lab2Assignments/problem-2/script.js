let array = []
function test(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => function1(json))
    // array = json
    // alert(array[0].title);
}

function test2(){
    fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(json => console.log(json))
    // array = json
    // alert(array[0].title);
}

function function1(json){

    let arr = []
    console.log(json.title.filter(word => word !== ' ').length <5)
    // if (json.title.filter(word => word !== ' ').length <5){
        
    // }
    // for(var i = 0;i < json.length;i++){
    //     arr = json[i].title.split(' ')
    //     if (arr.filter(word => word !== ' ').length <5){

    //     }
    // }
    // alert(arr.length);
}