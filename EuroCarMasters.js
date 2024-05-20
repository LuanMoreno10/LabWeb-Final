    const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList.toggle('fa-bars', !isOpen);
    toggleBtnIcon.classList.toggle('fa-xmark', isOpen);
};

let slideIndex = 0;
let slideInterval;

function showSlides(auto = true) {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  


    if (auto) {
        slideInterval = setTimeout(() => showSlides(true), 8000); 
    }
}

function plusSlides(n) {
    clearTimeout(slideInterval); 
    slideIndex += n - 1;
    if (slideIndex < 0) {slideIndex = document.getElementsByClassName("mySlides").length - 1}
    if (slideIndex >= document.getElementsByClassName("mySlides").length) {slideIndex = 0}
    showSlides(false); 
}


showSlides();
