// nav-open-close
const body = document.querySelector('body'),
      navMenu = body.querySelector('.menu'),
      navopen = body.querySelector('.nav-openbtn');
      navclose = body.querySelector('.nav-closebtn');

      if(navMenu && navopen){
        navopen.addEventListener("click", () =>{
            navMenu.classList.add("open");
            body.style.overflowY = "hidden"
        })
      }
      
      if(navMenu && navclose){
        navclose.addEventListener("click", () =>{
            navMenu.classList.remove("open");
            body.style.overflowY = "scroll"
        })
      }