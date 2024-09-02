const playbutton = document.getElementsByClassName("play")[0];

const resetbutton = document.getElementsByClassName("reset")[0];
const second = document.getElementsByClassName("sec")[0];
const minute = document.getElementsByClassName("min")[0];
const msecond = document.getElementsByClassName("msec")[0];
const lapbutton = document.getElementsByClassName("lap")[0];
const laps = document.getElementsByClassName("laps")[0];
const clearbutton = document.getElementsByClassName("lap-clear-button")[0];
let isplay = false;
let isreset=false;
let sec = 0;
let  msec=0;
let min=0;
let lapitem=0;
let s,u,v;
const togglebutton = () => {
    lapbutton.classList.remove("display-none")
    resetbutton.classList.remove("display-none")
}
const play = () => {
    if (!isplay&&!isreset) {
        playbutton.innerHTML = "Pause";
        v = setInterval(() => {
            minute.innerText = ++min + ":";
        
        }, 60*1000);
        s = setInterval(() => {
            if(sec==60)
            {
                sec=0;
            }
            second.innerText = ++sec + ":";
        }, 1000);
        u = setInterval(() => {
            if(msec===100)
            {
                msec=0;
            }
            msecond.innerText = ++msec ;
        }, 10);
    
    isplay=true;
    isreset=true;
}

    
    else {
        playbutton.innerHTML = "Play";
       
        clearInterval(v)
        clearInterval(s)
        clearInterval(u)
        isplay = false;
        isreset = false;
    }
    togglebutton();

}



const reset = () => {
    isreset=true;
    play();
    lapbutton.classList.add("display-none")
    resetbutton.classList.add("display-none")
    second.innerHTML = "&nbsp 0  :"
     msecond.innerHTML = "&nbsp 0 :"
        minute.innerHTML = "0 :"
}
const lap =()=>{
    const li=document.createElement("li");
    const number=document.createElement("span");
    const time=document.createElement("span");
    li.setAttribute("class" , "lap-item");
    number.setAttribute("class" , "number");
    time.setAttribute("class" , "time");
    time.innerHTML=`#${++lapitem} &nbsp   &nbsp  &nbsp ${min} : ${sec} : ${msec}`;
    li.append(number,time);
    laps.append(li);
    clearbutton.classList.remove("display-none");


}
const clear =()=>{
    laps.innerHTML='';
    laps.append(clearbutton)
    clearbutton.classList.remove("display-none");
    lapitem=0;
}
playbutton.addEventListener("click", play)
resetbutton.addEventListener("click", reset)
lapbutton.addEventListener("click", lap)
clearbutton.addEventListener("click",clear )