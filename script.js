// script.js
document.getElementById('hamburger').addEventListener('click', () => {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const searchBar = document.querySelector(".search-bar");
  
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      searchBar.classList.toggle("active");
    });
  });

  
  function toggleMenu() {
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("active");
  }

  
  document.getElementById('hamburger').addEventListener('click', function () {
    const nav = document.getElementById('navContainer');
    nav.classList.toggle('active');
  });

  
  
  function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
  }

    document.getElementById('hamburger').addEventListener('click', function () {
      const nav = document.getElementById('navContainer');
      nav.classList.toggle('active');
    });
    
    document.querySelector('.search-bar input').addEventListener('focus', function () {
      this.parentElement.classList.add('active');
    });
    
    document.querySelector('.search-bar input').addEventListener('blur', function () {
      if (!this.value) {
        this.parentElement.classList.remove('active');
      }
    });