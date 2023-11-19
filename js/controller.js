'use strict'


function onInit() {
      var logedInUser = loadFromStorage('logedInUser')

      if (logedInUser && logedInUser.isAdmin) {
            toggleDisplayLogIn()
            toggleDispaySecretContent()
      }


}



function onInitAdmin() {
      var logedInUser = loadFromStorage('logedInUser')

      if (!logedInUser || !logedInUser.isAdmin) {
            removeFromStorage('logedInUser')
            goToLoginPage()
      }
      renderTable()
}



function renderTable() {
      const elTable = document.querySelector('.users-table')

      const keys = Object.keys(gUsers[0])

      var strHtml =

            `<tr>
      <th>${keys[0]}</th>
      <th>${keys[1]}</th>
      <th>${keys[2]}</th>
      <th>${keys[3]}</th>
      <th>${keys[4]}</th>
      </tr>`

      strHtml += gUsers.map((user) => {
            return `<tr>
      <td>${user.id}</td>
      <td>${user.username}</td>
      <td>${user.password}</td>
      <td>${getDateAndTime(user.lastLoginTime)}</td>
      <td>${user.isAdmin}</td>
      </tr>`
      }).join('')

      elTable.innerHTML = strHtml
}


function onSetSortBy(elSelect) {
      setSortBy(elSelect.value)
      renderTable()
}





function checkLogin(ev) {
      ev.preventDefault()


      var username = ev.target[0].value
      var password = ev.target[1].value

      var logedInUser = gUsers.find((user) => user.username.toString() === username && user.password.toString() === password)
      if (logedInUser) {

            logedInUser.lastLoginTime = Date.now()
            saveToStorage('logedInUser', logedInUser)
            toggleDisplayLogIn()
            toggleDispaySecretContent()
            toggleAdminBtn(logedInUser.isAdmin)


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

function logOut() {
      goToLoginPage()
      removeFromStorage('logedInUser')
      toggleDispaySecretContent()
      toggleDisplayLogIn()
}

function toggleAdminBtn(isAdmin) {
      var elAdminBtn = document.querySelector('.admin-btn')

      if (isAdmin) {
            elAdminBtn.style.display = ('inline-block')
      } else {
            elAdminBtn.style.display = ('none')
      }
}

function goToAdminPage() {
      window.location = 'admin.html'
}

function goToLoginPage() {
      window.location = 'index.html'
}



