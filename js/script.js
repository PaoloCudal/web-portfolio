const sections = document.querySelectorAll('.section-hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('section-show');
        }
        /*else {
            entry.target.classList.remove('section-show'); 
        }*/
    });
}, {
    threshold: 0.3
});

sections.forEach(section => {
    observer.observe(section);
});