
function function1(json){

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((json) => {
        const result = json
        .filter((test) => test.title.split(" ").length >6)
        .map((test) => test.title);

        console.log(result);
        console.log(result.length);
    })

}

function function2(json){

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())//response type
    .then(data => {
        let wordFreq = []
        data.forEach(post => {
            let words = post.body.split(" ");
            words.forEach(word => {
                let index = wordFreq.findIndex(element => {
                    return Object.keys(element)[0] === word
                })
                data = {}
                data[word] = 1
                index === -1 ? wordFreq.push(data) : wordFreq.at(index)[word] += 1
            })
        })
        const compareNums = (a, b) => {
            return Object.values(a)[0] > Object.values(b)[0] ? -1:1;
        }
        wordFreq.sort(compareNums);

        console.log(wordFreq)
    });
}

