
// rating star project .......................................
const starEl = document.querySelectorAll('.fa-star')
const emojesEl = document.querySelectorAll('.far')
const colorArray = ['red', 'orange', 'lightblue', 'lightgreen', 'green']
updateRating(0)
starEl.forEach((element, index) => {
    element.addEventListener('click', () => {
        updateRating(index)
    })
})

function updateRating(index) {
    starEl.forEach((element, response) => {
        if (response < index + 1) {
            element.classList.add('active')
        } else {
            element.classList.remove('active')
        }
    })
    emojesEl.forEach((elm) => {
        elm.style.transform = `translateY(-${index * 82}px)`
        elm.style.color = colorArray[index]
    })
}
// finish emoje rating .............................................


// Profile Statistics start 
const contersEl = document.querySelectorAll('.conter')
contersEl.forEach(res => {
    res.innerText = '0'
    incementCounter()
    function incementCounter() {
        let currtunNum = +res.innerText
        const dataCeil = res.getAttribute('data-ceil')
        const incetment = dataCeil / 15
        currtunNum = Math.floor(currtunNum + incetment)

        if (currtunNum < dataCeil) {
            res.innerText = currtunNum
            setTimeout(incementCounter, 100)
        } else {
            res.innerText = dataCeil
        }

    }
})
// Profile Statistics finish...................... 
// images gallery start

const imageContainerEl = document.querySelector('.image-containetr')
const prevEl = document.getElementById('prev')
const nextEl = document.getElementById('next')
let x = 0
let timer;
prevEl.addEventListener('click', () => {
    x = x + 45
    clearTimeout(timer)
    updateGallery()
    console.log(x)
})
nextEl.addEventListener('click', () => {
    x = x - 45
    clearTimeout(timer)
    updateGallery()
})
function updateGallery() {
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`
    timer = setTimeout(() => {
        x = x - 45
        updateGallery()
    }, 3000);
}
updateGallery()

// finish image gallery..............

// start new year

const dayEl = document.getElementById('day')
const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minute')
const seacendEl = document.getElementById('seacend')
const newYearTime = new Date("Jan 1,2023 00:00:00").getTime()

updateCountdown()
function updateCountdown() {
    const now = new Date().getTime()
    const gap = newYearTime - now
    const seacend = 1000;
    const minute = seacend * 60
    const hour = minute * 60
    const day = hour * 24

    const d = Math.floor(gap / day)
    const h = Math.floor((gap % day) / hour)
    const m = Math.floor((gap % hour) / minute)
    const s = Math.floor((gap % minute) / seacend)

    dayEl.innerHTML = d
    hourEl.innerHTML = h
    minuteEl.innerHTML = m
    seacendEl.innerHTML = s
    setInterval(updateCountdown, 1000)

}