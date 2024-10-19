/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()


emailjs.sendForm('service_d45h81k','template_ctb6ks3','#contact-form','YhirVfsPh-byHkc_A')

.then(() =>{
    contactMessage.textContent = 'Message sent succesfully'

    //remove
    setTimeout(() =>{
        contactMessage.textContent = ''
}, 5000)

contactForm.reset()
}, () => {
    contactMessage.textContent = 'Message not sent (service error)'
})
}
contactForm.addEventListener('submit' , sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')
}                  

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
