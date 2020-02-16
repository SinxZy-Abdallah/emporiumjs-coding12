// CIBLAGE 
let body = document.querySelector('body')
let btnblack = document.getElementsByTagName('button')[2]
let btnwhite = document.getElementsByTagName('button')[1]
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
let fashion = document.getElementById('Fashion carousel')
let h3title = document.getElementById('h3title')
let lux2 = document.getElementById('lux2')
let leath2 = document.getElementById('leath2')
let bol2 = document.getElementById('bol2')
let women2 = document.getElementById('women2')
let btn = document.getElementById('btn')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let overfooter = document.getElementById('over-footer')


// EVENT btn BLACK
btnblack.addEventListener('click', () => {
    body.style.backgroundColor = 'black'
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
    h3title.style.color = 'white'
    lux2.style.color = 'white'
    leath2.style.color = 'white'
    bol2.style.color = 'white'
    women2.style.color = 'white'
    btn.style.color = 'white'
    btn2.style.color = 'white'
    btn3.style.color = 'white'
    btn4.style.color = 'white'
})

// EVENT BTN WHITE
btnwhite.addEventListener('click', () => {
    body.style.backgroundColor = 'white'
    h1.style.color = 'black'
    a.classList.remove('text-white')
    a.classList.add('text-dark')
    a1.classList.remove('text-white')
    a1.classList.add('text-dark')
    a2.classList.remove('text-white')
    a2.classList.add('text-dark')
    a3.classList.remove('text-white')
    a3.classList.add('text-dark')
    a4.classList.remove('text-white')
    a4.classList.add('text-dark')
    a5.classList.remove('text-white')
    a5.classList.add('text-dark')
    h4.style.color = 'black'
    lux.style.color = 'black'
    leath.style.color = 'black'
    bol.style.color = 'black'
    women.style.color = 'black'
    tshirt.style.color = 'black'
    plats.style.color = 'black'
    sofa.style.color = 'black'
    bed.style.color = 'black'
    shoes.style.color = 'black'
    h3title.style.color = 'black'
    lux2.style.color = 'black'
    leath2.style.color = 'black'
    bol2.style.color = 'black'
    women2.style.color = 'black'
    btn.style.color = 'black'
    btn2.style.color = 'black'
    btn3.style.color = 'black'
    btn4.style.color = 'black'
})



///////  CONNEXION  //////// 
function openForm() {
    document.getElementById('myform').style.display = "block"
}
function closeForm() {
    document.getElementById('myform').style.display = 'none'
}
///////  INSCRIPTION /////
let inscription = document.getElementsByTagName('a')[6]
let popupform = document.getElementsByTagName('form')[0]
let CONNEXION = document.getElementsByTagName('a')[7]

inscription.addEventListener('click', () => {
    document.getElementById('myform').style.display = 'none'
})
CONNEXION.addEventListener('click', () => {
    document.getElementById('myform2').style.display = 'none'
})

function openForm2() {
    document.getElementById('myform2').style.display = "block"
}
function closeForm2() {
    document.getElementById('myform2').style.display = 'none'
}

// NAVBAR STICKY SCROLL
window.onscroll = function () { myFunction() }
let nav = document.getElementById('nav')
let sticky = nav.offsetTop
let emporuim = document.getElementById('firsth1')
function myFunction() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky");
    }
}



///////// AUTO TEXT ANIMATION
const autotext = document.getElementById('autotext')
const text = "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring wich I enjoy with my."
let index = 0

// jouer animation autotext function
const play = () => {
    autotext.innerHTML = text.slice(0, index)
    index++;
    if(index > text.length){
        index = 0
    }
}

let timer = setInterval(play, 200)