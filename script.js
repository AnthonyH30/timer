const [btnStart, btnStop, btnReset] = document.querySelectorAll('button');
let sec = 0;
let min = 0;
let hr = 0;
let interval;


function start(){
    timer()
    interval = setInterval(timer, 1000);
}

function stop(){
    clearInterval(interval);
}

function reset(){
    clearInterval(interval);
    hr= 0;
    min=0;
    sec=0;
    document.querySelector('h1.hour').innerText= `${twoDigits(hr)}:${twoDigits(min)}:${twoDigits(sec)}`;
}

function timer(){
    sec++
    if(sec== 60){
        min++
        sec=0
        if(min==60){
            hr++
            min=0
        }
    }
    document.querySelector('h1.hour').innerText= `${twoDigits(hr)}:${twoDigits(min)}:${twoDigits(sec)}`;
}

function twoDigits(digit){
    if(digit<10){
        return(`0${digit}`)
    }else{
        return(digit)
    }
}