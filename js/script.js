const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', ()=>{
        document.body.classList.remove('nav-open');
    })
});

//TypeWriter Class

class TypeWriter{
    constructor(txtElement, words, wait = 1000){
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    //Type Method
    type(){
        //Current Index of word
        const current = this.wordIndex % this.words.length;

        //Get Full Text of current word
        const fullTxt = this.words[current];
        console.log(fullTxt);

        //check if deleting
        if(this.isDeleting){
            //Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        }else{
            //Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        //Insert txt into element
        this.txtElement.innerHTML = `<span class = "txt">${this.txt}</span>`

        //Type Speed
        let typeSpeed = 150;
        if(this.isDeleting){
            typeSpeed /= 2;
        }

        //check if Word is complete
        if(!this.isDeleting && this.txt === fullTxt){
            //make pause at end
            typeSpeed = this.wait;
            //set Delete to true
            this.isDeleting = true;
        }else if(this.isDeleting && this.txt === ''){
            this.isDeleting = false;
            
            //Move to next Word
            this.wordIndex++;

            //Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(()=>this.type(), typeSpeed);
    }
} 

/*
Another Way of writing same code:

// TypeWriter Animation
const TypeWriter = function(txtElement, words, wait = 100){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

//Type Method
TypeWriter.prototype.type = function(){
    //Current Index of word
    const current = this.wordIndex % this.words.length;

    //Get Full Text of current word
    const fullTxt = this.words[current];
    console.log(fullTxt);

    //check if deleting
    if(this.isDeleting){
        //Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    }else{
        //Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //Insert txt into element
    this.txtElement.innerHTML = `<span class = "txt">${this.txt}</span>`

    //Type Speed
    let typeSpeed = 150;
    if(this.isDeleting){
        typeSpeed /= 2;
    }

    //check if Word is complete
    if(!this.isDeleting && this.txt === fullTxt){
        //make pause at end
        typeSpeed = this.wait;
        //set Delete to true
        this.isDeleting = true;
    }else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        
        //Move to next Word
        this.wordIndex++;

        //Pause before start typing
        typeSpeed = 500;
    }

    setTimeout(()=>this.type(), typeSpeed);
}
*/

//Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

//Init App
function init(){
    const txtElement = document.querySelector('.section__subtitle--intro');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    //Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}










// Skills Accordian
const skillsContent = document.getElementsByClassName('skill__content');
const skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills(){
    let itemClass = this.parentNode.className;

    for(i = 0; i <  skillsContent.length; i++){
        skillsContent[i].className = 'skill__content skills__close';
    }

    if(itemClass === 'skill__content skills__close'){
        this.parentNode.className = 'skill__content skills__open';
    }
}

skillsHeader.forEach((ele) => {
    ele.addEventListener('click', toggleSkills);
})







// Qualifaction Tabs
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active');
        });
        target.classList.add('qualification_active');

        tabs.forEach(tab=>{
            tab.classList.remove('qualification__active');
        })
        tab.classList.add('qualification_active');
    })
})





// Swiper JS: For Carousel
let swiper = new Swiper('.swiper', {
    cssMode: true,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
});