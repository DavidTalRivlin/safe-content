'use strict'

const gUser = {}


const gUsers = [
      
      {
      id: 'u101',
      username: 'puki',
      password: 'secret1',
      lastLoginTime: 1601891998864,
      isAdmin: true
}, 
{
      id: 'u102',
      username: 'muki',
      password: 'secret2',
      lastLoginTime: 1601891998864,
      isAdmin: false
}, 
{
      id: 'u103',
      username: 'shuki',
      password: 'secret3',
      lastLoginTime: 1601891998864,
      isAdmin: false
}


]




///////////////// Private Functions:

 function _createUser(userName, password){
   return {
   id: makeId(),
   username: 'puki',
   password: 'secret',
   lastLoginTime: 1601891998864,
   isAdmin: false
   
   }
 }
 
 function _createUsers(){

 }