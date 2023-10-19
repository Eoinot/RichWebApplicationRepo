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
    .then(json)
    // array = json
    // alert(array[0].title);
}

function function1(json){

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((json) => {
        const result = json
        .filter((test) => test.title.split(" ").length >6)
        .map((test) => test.title);

        console.log(result);
    })
    // if (json.title.filter(word => word !== ' ').length <5){
        
    // }
    // for(var i = 0;i < json.length;i++){
    //     arr = json[i].title.split(' ')
    //     if (arr.filter(word => word !== ' ').length <5){

    //     }
    // }
    // alert(arr.length);


}