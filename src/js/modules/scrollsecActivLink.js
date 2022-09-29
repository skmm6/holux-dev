const sections = document.querySelectorAll('section[id]');

export function scrollActive() {
    const scrollY = window.pageYOffset;



    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id')
        console.log( document.querySelector('.nav__menu a[href*=' + sectionId +']'));
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove('active-link')
        }
    })
}

// show scroll up

export function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    if(this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll'); 
    }else {
        scrollUp.classList.remove('show-scroll');
    }
}

