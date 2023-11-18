'use strict'

function makeId(length = 6) {
      var id = ''
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

      for (var i = 0; i < length; i++) {
            id += possible.charAt(getRandomInt(0, possible.length))
      }
      return id
}


function getRandomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}


function getDateAndTime(timestamp) {
      return new Date(timestamp).toString().split(' ')[1] + ' '
            + new Date(timestamp).toString().split(' ')[2] + ' '
            + new Date(timestamp).toString().split(' ')[3] + ' '
            + new Date(timestamp).toString().split(' ')[4]

}


function sortByText(arr, key) {
      arr.sort((a, b) => {
            if (a[key].toLowerCase() < b[key].toLowerCase()) {
                  return -1;
            }
            if (a[key].toLowerCase() > b[key].toLowerCase()) {
                  return 1;
            }
            return 0;
      })
}


function sortByNum(arr, key) {
      arr.sort((a, b) => {
            if (a[key] > b[key]) {
                  return -1;
            }
            if (a[key] < b[key]) {
                  return 1;
            }
            return 0;
      })
}