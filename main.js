const menuBar = document.querySelector('.header-top i')
menuBar.addEventListener("click",() => {
    document.querySelector('.header-top ul').classList.toggle('active')
})