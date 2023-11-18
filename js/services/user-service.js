'use strict'

const gUsers = []
var gSortBy = 'lastLoginTime'

_createUsers()

function setSortBy(sortBy) {
      gSortBy = sortBy
      sortUsers()
}


function sortUsers() {
      switch (gSortBy) {
            case 'lastLoginTime':
                  sortByNum(gUsers, gSortBy)
                  break
            case 'username':
                  sortByText(gUsers, gSortBy)
                  break
      }
}

///////////////// Private Functions:

function _createUser(username, password, isAdmin = false) {
      return {
            id: makeId(),
            username,
            password,
            lastLoginTime: Date.now() - getRandomInt(0, 99999999999),
            isAdmin
      }
}

function _createUsers() {
      gUsers.push(_createUser('muki', 'secret1', true),
            _createUser('puki', 'secret2'),
            _createUser('shuki', 'secret3'),
            _createUser('david', 'secret4'),
            _createUser('ahron', 'secret5'))


}

function _saveUsers() {
      saveToStorage('users', gUsers)
}


