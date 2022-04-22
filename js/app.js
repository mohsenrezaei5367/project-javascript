
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



