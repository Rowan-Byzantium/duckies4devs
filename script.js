const pics = document.querySelectorAll(".thumbs .thumbs-img");
//select all thumbs pics in bigger size
const frame = document.querySelector(".pictures-img");
//select the place where the bigger pic will be display

pics.forEach(function (pic) {
    //to apply for each pictures
    
    pic.addEventListener("mouseover", function (e) {
        frame.setAttribute("src", this.getAttribute("srcset"));
    })
    //replace the source image of the frame by the srcset of the image hover
    
})


const btnLft = document.querySelector(".page-pics .button-left");
const btnRgt = document.querySelector('.page-pics .button-right');

btnLft.addEventListener('click', function(e) {
    const ulThumbs = document.querySelector('#thumb-list');
    ulThumbs.appendChild(ulThumbs.firstElementChild);
});

btnRgt.addEventListener("click", function(e){
    const ThumbList = document.querySelector('#thumb-list');
    ThumbList.appendChild(ThumbList.lastElementChild)
})