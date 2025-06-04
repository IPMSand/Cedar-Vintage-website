      /*
      
      <!-------------------JavaScript---------------------
      <script>// Get references to the navbar element and the body element
      //make this work when scrolling up only
        const navbar = document.querySelector('.navbar');
        const body = document.body;
        
        // Function to handle the scroll event
        function handleScroll() {
            // Calculate the scroll distance from the top
            const scrollY = window.scrollY || body.scrollTop;
        
            // Set the navbar color based on the scroll position
            if (scrollY > 10) {
                navbar.classList.remove('scrolled');
            } else {
                navbar.classList.add('scrolled');
            }
        }
        
        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);</script> --->

        
        
         <!-------JavaScript for Toggle Menu------->
        <script> const navbarToggle = document.querySelector('.navbar-toggle');
            const nav = document.querySelector('.navbar');
            
            navbarToggle.addEventListener('click', () => {
                navbar.classList.toggle('show');
            });
         </script>-----------------------*/


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