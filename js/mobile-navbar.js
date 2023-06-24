class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();


//aparecer menu ao scrollar a página

document.addEventListener('scroll', rolar);

function rolar() {
        var atualPosicao = window.scrollY;
        var menu = document.querySelector(".menu");
        if(atualPosicao == 0) {
            
            menu.classList.remove('active-color');
        } else {
            
            menu.classList.add("active-color");
        }

        
    }

    //Galeria Nossos Pets

    document.addEventListener('DOMContentLoaded', function() {
      var stream = document.querySelector('.gallery__stream');
      var items = document.querySelectorAll('.gallery__item');
      
      var prev = document.querySelector('.gallery__prev');
      prev.addEventListener('click', function() {
        stream.insertBefore(items[items.length - 1], items[0]);
        items = document.querySelectorAll('.gallery__item');
      });
      
      var next = document.querySelector('.gallery__next');
      next.addEventListener('click', function() {
        stream.appendChild(items[0]);
        items = document.querySelectorAll('.gallery__item');
      });
    });