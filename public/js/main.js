const intervalTimer = 10;
let isAutoScroll = true;
let count = 0;
const resetCount = 400;
let displayTime = 0;
let opacity = 0;
let currentWrapper = 1;

const createWrapp = () => {
    
    $('<div></div>')
        .appendTo('.container')
        .addClass('wrapp');

    count = 0 ;
    currentWrapper++ ;
    
};

const createNumber = () => {
    
    $(`<p> ${displayTime} </p>`)
        .appendTo(`.wrapp:nth-child(${currentWrapper+1})`)
        .addClass('time')
        .css({opacity: opacity/100});

};

const raf = () => {

    window.scrollTo(0, document.body.scrollHeight)
    displayTime < 2001 && window.requestAnimationFrame(raf)
    window.cancelAnimationFrame(raf) 
    
}

$(document).ready(() => {
    
    const intervalNumber = setInterval(()=>{

        opacity++;
        count++;
        displayTime++;

        opacity > 95 ? opacity = 10 : ''
        
        createNumber()

        count === resetCount && createWrapp()
        
        displayTime > 2798 && window.clearInterval(intervalNumber)

    }, intervalTimer);

    raf()

}) 
