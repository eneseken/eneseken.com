import React from 'react'
import './styles/scrollToExplore.css'; 


 function ScrollToExplore() {

    document.addEventListener("DOMContentLoaded", function() {
        const scrollDown = document.querySelector(".scroll-down");
      
        scrollDown.addEventListener("click", function() {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
          });
        });
      
        window.addEventListener("scroll", function() {
          const scrollOffset = window.pageYOffset;
          if (scrollOffset > 0) {
            scrollDown.style.transition = "transform 0s";
            scrollDown.style.transform = "translateY(0)";
          } else {
            scrollDown.style.transition = "transform 0s";
            scrollDown.style.transform = "translateY(0)";
          }
        });
      });
      
  return (
    <div className="scroll-down">
    <p className="scroll-text">Scroll to explore</p>
    <div className="line"></div>
    <div className="dot"></div>
    </div>
  )
}
export default ScrollToExplore;