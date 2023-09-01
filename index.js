console.log("Script running");
const crossIcon = document.querySelector('#cross');
crossIcon.style.display = 'none';

const hamburg = document.querySelector('#ham');
hamburg.style.display = 'inline';

const sidebarElement = document.querySelector('.sidebar');

hamburg.addEventListener("click", ()=>{
    sidebarElement.classList.remove('sidebarGO');
    hamburg.style.display = 'none';
    setTimeout(() => {
        crossIcon.style.display = 'inline';
    }, 300);
});

crossIcon.addEventListener("click", ()=>{
    sidebarElement.classList.add('sidebarGO');
    crossIcon.style.display = 'none';
    setTimeout(() => {
        hamburg.style.display = 'inline';
    }, 300);
})