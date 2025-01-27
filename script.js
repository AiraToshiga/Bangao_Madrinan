$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }
        
    });

    // responsive navbar
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typewriter animation
    var typed = new Typed(".typing", {
        strings: ["Digital Arts.", "Graphic Design.", "Web Design."],
        typeSpeed: 100,
        backSpeed: 30,
        loop: true,
    });
});

$(function(){
    
    emailjs.init("wKlB6KgfJSuG9IeJ0"); 
})();
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    
    emailjs.send("service_ub482gn", "template_nyv52rb", {
        name: name,
        email: email,
        message: message,
    })
    .then(function(response) {
        alert("Message sent successfully!");
    }, function(error) {
        alert("Failed to send message. Please try again later.");
    });
});