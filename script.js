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

/* carrousel images en haut */
const btnLft = document.querySelector(".page-pics .button-left");
const btnRgt = document.querySelector('.page-pics .button-right');
//select the buttons left & right

const ThumbList = document.querySelector('#thumb-list')
//select the list

btnLft.addEventListener('click', function(e){

})

/*btnLft.addEventListener('click', function(e) {
    ThumbList.appendChild(ThumbList.firstElementChild);
});
btnRgt.addEventListener("click", function(e){
    ThumbList.appendChild(ThumbList.lastElementChild)
})*/

/* accordéon */
const btnAdv = document.querySelector('.advantages .product-acrd-lnk');
const adv = document.querySelector('.product-advantages');

btnAdv.addEventListener('click', function(e){
    // btnAdv.classList.toggle('closed');
    adv.classList.toggle('hidden');
});

const btnCar = document.querySelector('.carac .product-acrd-lnk');
const car = document.querySelector('.product-car')

btnCar.addEventListener('click', function(e){
    // btnCar.classList.toggle('closed');
    car.classList.toggle('hidden');
});


/*ajouter au panier*/


