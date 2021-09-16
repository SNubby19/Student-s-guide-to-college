const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobile_links = document.getElementById('mobile-links');
const overlay = document.querySelector('.header-overlay');
var delay_ms = 10;
var state = 'hidden';

hamburgerBtn.addEventListener('click', function(){
    if(state == "hidden") {
        state = "visible";
        setTimeout(function() {
            mobile_links.classList.add('header_toggle');
            overlay.classList.add('header-overlay-toggle');
        }, delay_ms);
    } 
    else {
        state = "hidden";
        setTimeout(function() {
            mobile_links.classList.remove('header_toggle');
            overlay.classList.remove('header-overlay-toggle');
        }, delay_ms);
        
    }
    
});
