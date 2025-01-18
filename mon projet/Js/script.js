const menuBtn = document.querySelector('.menu-btn')
let menuOpen = false;
menuBtn .addEventListener('click', () => {
    if(menuOpen) {
        menuBtn.classlist.add('open');
        menuOpen = true;
    } else{
        menuBtn.classlist.remove('Open');
        menuOpen = false;
    }
 
})