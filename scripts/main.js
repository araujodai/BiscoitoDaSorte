import { Messages } from "./messages.js"
import { OpenCookie } from "./controllers.js"

const cookie = document.querySelector('#cookie')
const openedCookie = document.querySelector('#opened-cookie')
const buttonResetCookie = document.querySelector('.reset-cookie')

function clickAwait() {
  setTimeout(function() {
      OpenCookie.getLuckyMessage()
      OpenCookie.open() 
  }, 3000)
}

document.addEventListener('keypress', e => {
  if (openedCookie.classList.contains("hide") && e.key === 'Enter') {
    cookie.click()
  } 

  if (cookie.classList.contains("hide") && e.key === 'Enter') {
    buttonResetCookie.click()
  }

})

cookie.addEventListener('click', () => {
  cookie.classList.add('shake')
  clickAwait()
})

buttonResetCookie.addEventListener('click', () => {
  OpenCookie.reset()
  OpenCookie.titleBox.innerText = Messages.title
  OpenCookie.subtitleBox.innerText = Messages.subtitle
})

export { cookie, openedCookie,buttonResetCookie }