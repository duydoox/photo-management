let images = document.querySelectorAll('.card_img img');
let cover = document.querySelector('.cover');
let close = document.querySelector('.close');
let image = document.querySelector('.cover_inner img');
let back = document.querySelector('.back');
let next = document.querySelector('.next');

let currentIndex = 0;

function show(){
    if(currentIndex <= 0){
        back.classList.add('hide');
    }
    else{
        back.classList.remove('hide');
    }

    if(currentIndex >= images.length-1){
        next.classList.add('hide');
    }
    else{
        next.classList.remove('hide');
    }

    image.src = images[currentIndex].src;
}

images.forEach((item, index) => {
    item.addEventListener('click', function(){
        currentIndex = index;
        show();
        cover.classList.add('show');
    })
})

close.addEventListener('click', function(){
    cover.classList.remove('show');
})

back.addEventListener('click', function(){
    if(currentIndex > 0){
        currentIndex--;
        show();
    }
})

next.addEventListener('click', function(){
    if(currentIndex < images.length-1){
        currentIndex++;
        show();
    }
})