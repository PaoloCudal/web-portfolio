document.addEventListener("DOMContentLoaded", () => {

  const sections = document.querySelectorAll('.section-hidden');
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links"); 
  const navItems = document.querySelectorAll("#nav-links a");

  const observer = new IntersectionObserver((entries) => {  //Animation Observer
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('section-show');
      }
    });
  }, {
    threshold: 0.3
  });

  sections.forEach(section => {
    observer.observe(section);
  });

  //Hamburger Function
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
       console.log("clicked");
      navLinks.classList.toggle("active");
    });
  }

  //smooth clicking for dropdown 
  document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove("active");
   }
 });

  //Navbar close functions
  navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

});