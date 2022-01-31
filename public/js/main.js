// const height = window.pageYOffset
const resetTime = 400
const intervalTimer = 10
const wrapp = $('.wrap')
let time = 0;
let displayTime = 0;
let opacity = 0;
let currentWrapper = 1;
  

const createWrapp = () => {
    
    $('<div></div>')
        .appendTo('.container')
        .addClass('wrapp')
    time = 0
    currentWrapper++
}

const createNumber = () => {

    $(`<p> ${displayTime} </p>`)
        .appendTo(`.wrapp:nth-child(${currentWrapper + 1})`)
        .addClass('time')
        .css({opacity: opacity/100});
}



$(document).ready(() => {
    
    const intervalNumber = setInterval(()=>{

        opacity++;
        time++;
        displayTime++;

        if (opacity > 95)
            {opacity = 10};

        time === resetTime && createWrapp()
        createNumber()

        if(displayTime>5000) {
            window.clearInterval(intervalNumber)
        }
    

    }, intervalTimer);

   
    // const bottomScroller = setInterval(window.scrollTo(0, document.body.scrollHeight), (intervalTimer*resetTime)+1)


}) 