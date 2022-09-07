// template_tyr5yle
// service_0pmuhwz
// _koKHD575eyOppOT-

function contact(event){
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
    .sendfomr(
        'service_0pmuhwz',
        'template_tyr5yle', 
        event.target,
        '_koKHD575eyOppOT-'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable. please contact me at shivompaudel@icloud.com"
        )
    })
}

function toggleModal() {
    if (isModalOpen) {
      isModalOpen = false;
      return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
  }
  