const images = ['./images/A.png', './images/witch sisters (complete).png', './images/ikemen idiots.png'];
const div = document.querySelector(".container");



function picture() {
    for(let i =0; i<images.length; i++) {
        const newImg = document.createElement('img');
        newImg.src = images[i];
        div.appendChild(newImg);
        var width = newImg.naturalWidth;
        var height = newImg.naturalHeight;
        console.log(width +"x"+ height);

        function checkSize() {
        
            if (width === height) {
                newImg.className += "image square";
            } else if (height > width) {
                newImg.className += "image tall"
            } else {
                newImg.className += "image landscape";
            }
            
        }
        checkSize()
    }
    
}



picture()

// const img = new Image()
// img.onload = function() {
//     // console.log(this.width + " " + this.height);
// }

// img.src = './images/A.png'
// img.src = './images/witch sisters (complete).png'

// const imageObject = {
//     name: "",
//     src: "",
//     height: 0,
//     width: 0
// }

// let aImg = new imageObject("A", "./images/A.png")
