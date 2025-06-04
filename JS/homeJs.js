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





