// CIBLAGE 
let body = document.querySelector('body')
let btnblack = document.getElementsByTagName('button')[2]
let headernav = document.getElementsByTagName('header')[0]
let h1 = document.getElementsByTagName('h1')[0]
let a = document.getElementsByTagName('a')[0]
let a1 = document.getElementsByTagName('a')[1]
let a2 = document.getElementsByTagName('a')[2]
let a3 = document.getElementsByTagName('a')[3]
let a4 = document.getElementsByTagName('a')[4]
let a5 = document.getElementsByTagName('a')[5]
// EVENT
btnblack.addEventListener('click', () => {
    headernav.style.backgroundColor = 'black'
    h1.style.color = 'white'
    a.classList.remove('text-dark')
    a.classList.add('text-white')
    a1.classList.remove('text-dark')
    a1.classList.add('text-white')
    a2.classList.remove('text-dark')
    a2.classList.add('text-white')
    a3.classList.remove('text-dark')
    a3.classList.add('text-white')
    a4.classList.remove('text-dark')
    a4.classList.add('text-white')
    a5.classList.remove('text-dark')
    a5.classList.add('text-white')
})