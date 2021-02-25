const navbar = document.querySelector("#navbar");
const navbarCTAScroll = document.querySelector("#navbarCTAScroll")

if(window.innerWidth > 576) {


    document.addEventListener('scroll', () => {

       if(window.pageYOffset > 20 ) {
           navbar.classList.remove('bg-transparent')
           navbar.classList.add('bg-light', 'shadow')
       } else {
           navbar.classList.remove('bg-light', 'shadow')
           navbar.classList.add("bg-transparent")
       }


       if(window.pageYOffset > window.innerHeight) {
           navbarCTAScroll.classList.remove("d-none")
       } else {
           navbarCTAScroll.classList.add("d-none")
       }

    })


}