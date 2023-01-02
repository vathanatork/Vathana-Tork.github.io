
var categories =document.getElementById('categories');
var drop = document.getElementById('home__nav-categories-wrap');

var n=0;
console.log(categories);
console.log(drop);
categories.addEventListener("click",()=>{
    if(n%2===0){
        drop.classList.remove('go_up-categories');
        drop.classList.add('drop_down-categories');
        n++;
    }else{
        drop.classList.remove('drop_down-categories');
        drop.classList.add('go_up-categories');
        n++;
    }
});
   

//resposive navbar

var x=0;
var bar = document.getElementById('home__nav-burger');
var barMenu = document.getElementsByClassName('home__nav-menu-link');
bar.addEventListener("click",()=>{
    if(x%2==0){
        barMenu[0].classList.remove('barUnActive');
        barMenu[0].classList.add('barActive');
        x++;
    }else{
        barMenu[0].classList.remove('barActive');
        barMenu[0].classList.add('barUnActive');
        x++;
    }
    
});

