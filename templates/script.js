let slide = document.getElementById('slides')

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let slideno = document.getElementById('slidenum')


btn1.onclick = function(){
    slide.style.transform =   'translateX(0%)'
    
    console.log('clcik');
    btn1.classList.add("active")
    btn2.classList.remove('active')
    btn3.classList.remove('active')
    slideno.replaceChild()
    slideno.append(1)
    
}




btn2.onclick = function(){
    slide.style.transform = 'translateX(-102%)'
    console.log('clicked');
    btn2.classList.add('active')
    btn3.classList.remove('active')
    btn1.classList.remove('active')


    slideno.innerText.replace('2')
    slideno.append(2)
}




btn3.onclick = function(){
    slide.style.transform = 'translateX(-200%)'
    console.log('clicked');
    btn3.classList.add('active')
    btn2.classList.remove('active')
    btn1.classList.remove('active')
    slideno.append(3)

}





// let slide = document.getElementById("slides")
// let btn1 = document.getElementById("btn1")
// let btn2 = document.getElementById("btn2")
// let btn3 = document.getElementById("btn3")
// // let btn4 = document.getElementById("btn4")-


// btn1.onclick = function(){
//     slide.style.transform = 'translateX(0px)'
//     console.log('clcik');
    
// }


// btn2.onclick = function(){
//     slide.style.transform = 'translateX(-100%)'
//     console.log('clcik');
//     }

// btn3.onclick = function(){
//     slide.style.transform = 'translateX(-200%)'
//     console.log('clcik');
    
// }




