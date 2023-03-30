import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'


createApp(App).mount('#app')

/*===== Scroll sections ====*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
   sections.forEach(sec => {
       let top = window.scrollY;
       let offset = sec.offsetTop - 150;
       let height = sec.offsetHeight;
       let id = sec.getAttribute('id');

       if(top >= offset && top < offset + height) {
           navLinks.forEach(links => {
               links.classList.remove('active');
               document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
           });

       };
   });
       
   /*========Sticky navbar ==========*/

   let header = document.querySelector('header');


   header.classList.toggle('sticky', window.scrollY > 100);

};
const title = document.querySelector("#title");
const descriptions = document.querySelectorAll(".description");

title.textContent = "Hello, it's me Arkaengel"


descriptions.forEach(function(desc) {
    desc.setAttribute("title","This is a description.");
  
});

document.write(title.getAttribute("id"));



/* ====loop ======*/
let skills = ["hardworking", "good listener", "positive thinker", "adaptability","flexibility"];

for (let index = 0; index < skills.length; index++) {
    
   
   
   let newLi = document.createElement("li");
   let newText = document.createTextNode(skills[index]);
   let newList = newLi.appendChild(newText);
   document.getElementById("skills").appendChild(newLi);

}
