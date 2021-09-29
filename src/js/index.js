"use-strict"

const telInput = document.getElementById('prefix-phone')
const dropdownFlag = document.getElementById('prefix-flag')
const telList = document.getElementById('tel-list')

// telInput.addEventListener('click', )

// function showTelDropdown() {
//   return telList.classList.replace('dn', '')
// }
//
// function hideTelDropdown() {
//   return telList.classList.add('dn')
// }

function flagDropdown() {
  console.log('test')
  if (telList.classList.contains('dn')) {
    telList.classList.remove('dn')
  } else {
    telList.classList.add('dn')
  }
}

dropdownFlag.addEventListener('click', flagDropdown)



