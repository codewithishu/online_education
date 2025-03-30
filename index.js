let body = document.body;

let profile= document.querySelector('.profile');

document.querySelector('#user-btn').onclick = () =>{
 profile.classList.toggle('active');
 searchform.classList.remove('active');
 
}

let searchform= document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
 profile.classList.toggle('active');
 profile.classList.remove('active');
}

let sidebar= document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
 sidebar.classList.toggle('active');
 body.classList.toggle('active');
}

document.querySelector('.close-side-bar').onclick = () =>{
 sidebar.classList.remove('active');
 body.classList.remove('active');

}

window.onscroll = () =>{
    profile.classList.remove('active');
    searchform.classList.remove('active');

    if(window.innerWidth<1200){
        sidebar.classList.remove('active');
        body.classList.remove('active');
    }
}

let togglebtn = document.querySelector('#toggle-btn');
let darkmode=localStorage.getItem('dark-mode');

const enableDarkmode=()=>{
    togglebtn.classList.replace('fa-sun','fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode','enabled');
}

const disableDarkmode=()=>{
    togglebtn.classList.replace('fa-moon','fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode','disabled');
}

if(darkmode==='enabled'){
    enableDarkmode();
}

togglebtn.onclick=(e)=>{
    let darkmode=localStorage.getItem('dark-mode');
    if(darkmode==='disabled'){
        enableDarkmode();
    }else{
        disableDarkmode();
    }
}
