// Top-nav-bar-position -nav-brand

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const navbarBrand = document.getElementById("navbar-brand");
  if (document.documentElement.scrollTop > 110) {
    navbarBrand.style.position = "fixed"; // Use fixed positioning
    navbarBrand.style.top = "0";        // Position at the top
    navbarBrand.style.left = "50%";       // Center horizontally
    navbarBrand.style.transform = "translateX(-50%)"; // Adjust for centering
    navbarBrand.style.fontSize = "20px"; // Keep the font size the same or adjust as needed.
    navbarBrand.style.zIndex = "100"; // Ensure it's above other content.
    //navbarBrand.style.backgroundColor = "transparent"; // Optional: Add a background color
    navbarBrand.style.padding = "10px"; // Optional: Add padding
  } else {
    navbarBrand.style.position = "relative"; // Or whatever your default positioning is
    navbarBrand.style.top = "auto";
    navbarBrand.style.left = "auto";
    navbarBrand.style.transform = "translateX(0)";
    navbarBrand.style.fontSize = "20px"; // Reset to original font size if needed
    navbarBrand.style.backgroundColor = "transparent"; // Optional: Reset background
    navbarBrand.style.padding = "0"; // Optional: Reset padding
  }
}





/*// Get references to the navbar element and the body element
const navbar = document.querySelector('.navbar');
const body = document.body;

// Function to handle the scroll event
function handleScroll() {
    // Calculate the scroll distance from the top
    const scrollY = window.scrollY || body.scrollTop;

    // Set the navbar color based on the scroll position
    if (scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Attach the scroll event listener
const navbarToggle = document.querySelector('.navbar-toggle');
const nav = document.querySelector('.navbar');

navbarToggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
});
/*@media (max-width: 768px)  {
  
  nav ul li a{
    display: none;
  }
  .icons ul li button{
    display: none;
  } 
 .menu-icon{
  display: contents;
 }
 .sidebar{
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  z-index: 999;
  
  box-shadow: -10 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
 }
 .sidebar li{
  width: 100%;
 }
 .sidebar a{
  width: 100%;
 }

}*/