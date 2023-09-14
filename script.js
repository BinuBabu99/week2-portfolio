/* form validation*/




// function phoneValidate() {
    
//     var email = document.getElementById("cemail").value;
//     var phone = document.getElementById("cphone").value;
    
    
//     var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     var phoneregex = /^\d{10}$/;
  
//     if(!email.match(validRegex)){
//       alert("Email not vlaid!!");
//     }else if(!phone.match(phoneregex)){
//       alert("Phone number should contain only 10 digits");
//     }
//   }

  var form = document.getElementById("contactForm")
  

  form.addEventListener("submit", function(event) {
    var email = document.getElementById("cemail").value;
    var phone = document.getElementById("cphone").value;
    
    var validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneregex = /^\d{10}$/;
    if(!validRegex.test(email)){
      event.preventDefault();
      alert("Email not valid!!");
    }else if(!phoneregex.test(phone)){
      event.preventDefault();
      alert("Phone number should contain only 10 digits");
    }else{
      alert("Message Sent!!");
    }
  });













/* ================toggle icon nav bar===============---*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};




/* -------------scroll section active link===========*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });



/* ----------sticky navbar-----------*/
let header = document.querySelector('header');

header.classList.toggle('sticky',window.scrollY > 100);
/* ================remove toggle icon and navbar when click navbar link (scroll)===========*/
menuIcon.classList.remove('bx-x');    
navbar.classList.remove('active');

};
/*======================scroll reveal============*/
ScrollReveal({ 
    reset: true,
    distance:'80px', 
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right'});


/* ==============typed js===================*/
const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer', 'Youtuber', 'Blogger'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop: true

});

