'use strict'

function onInit(){
    
}

function checkLogin(ev){
      ev.preventDefault()

     var username = ev.target[0].value
     var password = ev.target[1].value

     var LogedinUser = gUsers.find((user) => user.username.toString() === username && user.password.toString() === password)
     console.log (LogedinUser)


}

