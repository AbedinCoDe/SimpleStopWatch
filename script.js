
let [seconds, minutes, hours] = [0,0,0];
let displayTimes = document.getElementById('displayTimes');
let getStartBtn = document.getElementById('start');
let timer = null;

let startIcon = "images/start.png";
let pauseIcon = "images/pause-button.png";
let isRunning = false;

function stopWatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTimes.innerHTML = h + ":" + m + ":" + s;
}


document.getElementById('start').addEventListener('click', () =>{
    
    if(!isRunning){
        timer = setInterval(stopWatch, 1000);
        getStartBtn.src = pauseIcon;
        isRunning = true;
    }else{
        clearInterval(timer);
        getStartBtn.src = startIcon;
        isRunning = false;
    }

})


document.getElementById('stop').addEventListener('click', () => {
    clearInterval(timer);
    getStartBtn.src = startIcon;
    isRunning = false;
})

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    displayTimes.innerHTML = "00:00:00"
    isRunning = false;
    getStartBtn.src = startIcon;
})
