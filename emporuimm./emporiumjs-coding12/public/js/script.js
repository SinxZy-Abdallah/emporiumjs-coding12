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
let bgservice = document.getElementById('service')
let bgproducts = document.getElementById('products')
let h4 = document.getElementsByTagName('h4')[0]
let lux = document.getElementById('lux')
let leath = document.getElementById('leath')
let bol = document.getElementById('bol')
let women = document.getElementById('women')
let tshirt = document.getElementById('tshirt')
let plats = document.getElementById('plats')
let sofa = document.getElementById('sofa')
let bed = document.getElementById('bed')
let shoes = document.getElementById('shoes')

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
    bgservice.style.backgroundColor = "black"
    bgproducts.style.backgroundColor = 'black'
    h4.style.color = 'white'
    lux.style.color = 'white'
    leath.style.color = 'white'
    bol.style.color = 'white'
    women.style.color = 'white'
    tshirt.style.color = 'white'
    plats.style.color = 'white'
    sofa.style.color = 'white'
    bed.style.color = 'white'
    shoes.style.color = 'white'
})