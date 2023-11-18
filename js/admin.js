'use strict'

function onInitAdmin() {
      var logedInUser = loadFromStorage('logedInUser')

      if (!logedInUser || !logedInUser.isAdmin) goToLoginPage()
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
console.log('strHtml', strHtml)
}
