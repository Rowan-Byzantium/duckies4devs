// let buttonLeft = document.querySelector(".page-pics .button-left")
// console.log(buttonLeft);

// buttonLeft.addEventListener("click", function(){

// })

const pics = document.querySelectorAll(".thumbs .thumbs-img")
console.log(pics);
//select all thumbs pics in bigger size
const frame = document.querySelector(".pictures-img")
console.log(frame);
//select the place where the bigger pic will be display

pics.forEach(function (pic) {
    //to apply for each pictures

    pic.addEventListener("mouseover", function (e) {
        frame.setAttribute("src", this.getAttribute("srcset"));
    })
    //replace the source image of the frame by the srcset of the image hover

})

