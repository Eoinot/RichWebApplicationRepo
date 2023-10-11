//array of images
let HalloweenImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo3toTzQkSZnn-TLyd83zohXTgQTPX0rN3Pg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5omUW3x0B5QO0NJcZPWyMMsfnbbhf2gMWtg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwk5enxWee4WhHft7WY6mG0oihVEYTbDAAw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_XOOH5RRIHqIrV-s8lS3PKMdwl6tCA1WJxw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Nxv_y0tBWYVB7qtCWogfv2hzbhq_p5EDsQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4bPJF-_YJDhRvNRzbTDQI_RBiB5rxv0YaUA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtO5Aqt1MrFl90FxbQ3mK80pGrkwk2ASj40g&usqp=CAU",
]

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * HalloweenImages.length)
    imgs[i].src = HalloweenImages[randomImg]
}
//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "👺☹  𝕙ᵉｌĹㄖ  ♨👑";
}
const title = document.getElementsByTagName("title");
for (let i = 0; i < title.length; i++){
    title[i].innerText = "👺☹  𝕙ᵉｌĹㄖ  ♨👑";
}

//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "👺☹  𝕙ᵉｌĹㄖ hehehe  ♨👑.";
    document.body.style.color="yellow";
}

const span = document.getElementsByTagName("span");
for (let i = 0; i < span.length; i++){
    document.body.style.color="yellow";
}

document.body.style.backgroundColor = "orange";
document.body.style.color="orange";
document.body.style.fontStyle = "oblique";
document.body.style.fontSize="50px";

alert("Ohhhhhhhhh Spooooookyyyyy!!!!!!!!")

let img = document.createElement("img")
img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS8zkWgiqZ9MLVDmYxT4yXEuk1BLvAOr7y0Q&usqp=CAU"
img.style.width="1250px"

let button=document.createElement("button");
button.id='foo';
button.innerHTML="Press Me";
button.style.position = 'absolute',
button.style.top = document.body.clientHeight=' 100px';
button.style.left = document.body.clientHeight=' 100px';
button.onclick = () => {
    //let img = document.createElement("img")
    // set the position
    img.style.position = 'absolute',
    img.style.top = document.body.clientHeight * Math.random() + 'px';
    img.style.left = document.body.clientWidth * Math.random() + 'px';
    img.style.bottom = document.body.clientWidth * Math.random() + 'px';
  
    document.body.appendChild(img);
}
document.body.appendChild(button);




