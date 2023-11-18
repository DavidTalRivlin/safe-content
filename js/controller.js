'use strict'

function onInit() {
      clearStorage()
}

function checkLogin(ev) {
      ev.preventDefault()


      var username = ev.target[0].value
      var password = ev.target[1].value

      var LogedInUser = gUsers.find((user) => user.username.toString() === username && user.password.toString() === password)
      if (LogedInUser) {

            saveToStorage('logedInUser', LogedInUser)
            toggleDisplayLogIn()
            toggleDispaySecretContent()
      }
      
      var elUsernameInput = document.querySelector('#username')
      elUsernameInput.value = ''
      var elpasswordInput = document.querySelector('#password')
      elpasswordInput.value = ''


}

function toggleDisplayLogIn() {
      var elLogIn = document.querySelector('.log-in-area')
      elLogIn.classList.toggle('hidden')

}

function toggleDispaySecretContent() {
      var elSecretIn = document.querySelector('.secret-content')
      elSecretIn.classList.toggle('hidden')
}

function logOut(){
      removeFromStorage('logedInUser')
      toggleDispaySecretContent()
      toggleDisplayLogIn()

}