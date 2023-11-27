var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-content');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active");
    }

    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active");
}


function setSkillLevel(skill, level) {
    let skillElement = document.querySelector(`.skill:nth-child(${skill}) .skill-level`);
    let percentageElement = document.querySelector(`.skill:nth-child(${skill}) .percentage`);
    skillElement.style.width = level + '%';
    percentageElement.textContent = level + '%';
  }

  document.addEventListener('DOMContentLoaded', function() {
    setSkillLevel(1, 25);
    setSkillLevel(2, 20);
    setSkillLevel(3, 17);
    setSkillLevel(4, 60);
    setSkillLevel(5, 40);
  });

const cards = document.querySelectorAll('.project-card');

cards.forEach((card) => {
    card.addEventListener('click', () => {
        window.open(card.getAttribute('data-link'), '_blank');
    });
});

const links = document.querySelectorAll('a[href^="#"]');


links.forEach(link => {
  link.addEventListener('click', smoothScroll);
})

function smoothScroll(e) {
  e.preventDefault();

  const id = this.getAttribute('href');
  const offset = document.querySelector(id).offsetTop;

  scroll({
    top: offset,
    behavior: 'smooth'
  });

  
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger");
  menu.classList.remove("open");
  icon.classList.remove("open");
}

const navLinks = document.querySelectorAll('.menu-links a');

navLinks.forEach((link) => {
  link.addEventListener('click', smoothScroll);
});

const sections = document.querySelectorAll('section');

navLinks.forEach((link, i) => {
  link.addEventListener('click', () => {

    
    navLinks.forEach(link => link.classList.remove('active'));
    
    
    link.classList.add('active');

     
    scrollToSection(sections[i]);
  });
});

function scrollToSection(section) {
  scroll({
    top: section.offsetTop, 
    behavior: 'smooth'
  });
}



function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}