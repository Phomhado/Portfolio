/*This is just the code I used for the animation in the main #section-one. It translates all the section from the left to right 
when the user scrolls down to the <main>*/
document.addEventListener('DOMContentLoaded', function() {
    const mainTitle = document.querySelector("#main-title");
    const mainElement = document.querySelector('main');
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
          rect.left >= 0 &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }    
        function handleScroll() {
            if (isElementInViewport(mainElement)) {
              mainTitle.style.transform = "translateX(0)";
              window.removeEventListener("scroll", handleScroll);
            }
          };

    window.addEventListener("scroll", handleScroll);
});