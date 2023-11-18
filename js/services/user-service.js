'use strict'


const gUsers = []
_createUsers()

///////////////// Private Functions:

function _createUser(username, password, isAdmin = false) {
      return {
            id: makeId(),
            username,
            password,
            lastLoginTime: Date.now(),
            isAdmin
      }
}

function _createUsers() {
      gUsers.push(_createUser('muki', 'secret1', true),
       _createUser('puki', 'secret2'),
        _createUser('shuki', 'secret3'))


}

function _saveUsers(){
saveToStorage('users',gUsers)
}
