/*=============== SHOW MENU ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/
export const scrollHeader = () =>{
    const header = document.getElementById('header')

    if(window.scrollY >= 50) {
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }
}
/*============================SWIPER POPULAR ============*/
