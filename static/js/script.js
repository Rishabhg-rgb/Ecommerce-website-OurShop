let slide = document.getElementById('slides')

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let slideno = document.getElementById('slidenum')


btn1.onclick = function () {
    slide.style.transform = 'translateX(0%)'

    console.log('clcik');
    btn1.classList.add("active")
    btn2.classList.remove('active')
    btn3.classList.remove('active')
    slideno.innerText = '1'

}




btn2.onclick = function () {
    slide.style.transform = 'translateX(-100%)'
    console.log('clicked');
    btn2.classList.add('active')
    btn3.classList.remove('active')
    btn1.classList.remove('active')
    slideno.innerText = '2'


}




btn3.onclick = function () {
    slide.style.transform = 'translateX(-200%)'
    console.log('clicked');
    btn3.classList.add('active')
    btn2.classList.remove('active')
    btn1.classList.remove('active')
    slideno.innerText = '3'

}




