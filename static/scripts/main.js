$('.jquery').html('jquery is plugged in').css('border', '1px solid red')

// Header
document.querySelector('#hamburger-button').addEventListener('click', (e) => {
  e.stopImmediatePropagation()
  e.target.classList.toggle('opened')
  e.target.nextElementSibling.classList.toggle('opened')
})
