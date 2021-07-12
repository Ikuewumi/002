const imgBox = document.querySelector('.img-box');
const imgBoxWidth = imgBox.getBoundingClientRect().width;
console.log(imgBoxWidth);
const img = document.querySelector('.img');
const prevBtn = document.querySelector('#previous');
const nextBtn = document.querySelector('#next');
const images = Array.from(imgBox.children);
const closeBtn = document.querySelector('#close');
const openBtn = document.querySelector('#open');
const nav = document.querySelector('nav');

openBtn.addEventListener('click' , 
    function openMenu() {
        nav.style.transform = "translate(0% , -50%)";   
    }
);
closeBtn.addEventListener('click' , 
    function closeMenu() {
        nav.style.transform = "translate(100% , -50%)";
    }
);


for(i=0; i<images.length; i++) {
    images[i].style.left = i*imgBoxWidth +'px';
    console.log(images[i].style.left);
}

nextBtn.addEventListener('click', 
    function toNextImg() {
        const currentImg = imgBox.querySelector('.current');
        if(currentImg.nextElementSibling != null) {
            const nextImage = currentImg.nextElementSibling;
            const distance = nextImage.style.left;
            imgBox.style.transform = `translateX(-${distance})`;
            currentImg.classList.remove('current');
            nextImage.classList.add('current');
        } else {
            return null;
        }
    }
);

prevBtn.addEventListener('click', 
    function toPrevImg() {
        const currentImg = imgBox.querySelector('.current');
        if(currentImg.previousElementSibling != null) {
            const previousImage = currentImg.previousElementSibling;
            const distance = previousImage.style.left;
            imgBox.style.transform = `translateX(-${distance})`;
            currentImg.classList.remove('current');
            previousImage.classList.add('current');
        } else {
            return null;
        }
    }
);