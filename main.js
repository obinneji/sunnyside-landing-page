const toggler = document.querySelector('#toggle')
const mobileNav = document.querySelector('.nav-items')
toggler.addEventListener("click", function(){
    if(mobileNav.style.display === "none"){
        mobileNav.style.display = "block"
    } else {
        mobileNav.style.display = "none"
    }
})

