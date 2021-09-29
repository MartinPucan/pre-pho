"use-strict"

const telInput = document.getElementById('prefix')
const dropdownFlag = document.getElementById('prefix-flag')
const telList = document.getElementById('tel-list')

function flagDropdown() {
  console.log('test')
  if (telList.classList.contains('dn')) {
    telList.classList.remove('dn')
  } else {
    telList.classList.add('dn')
  }
}

dropdownFlag.addEventListener('click', flagDropdown)
if (event.target !== telList && event.target.parentNode !== telList) {
  telList.classList.add('dn')
}

dropdownFlag.addEventListener('click', function (e) {
  e = e || window.event;
  let target = e.target || e.srcElement;

  e.preventDefault()

  if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') === 'prefix-flag') {
    if (target.hasAttribute('data-target')) {
      // var m_ID = target.getAttribute('data-target');
      telList.classList.remove('dn');
    }
  }
})

// function flagDropdown() {
//   console.log('test')
//   if (telList.classList.contains('dn')) {
//     telList.classList.remove('dn')
//   } else {
//     telList.classList.add('dn')
//   }
// }


