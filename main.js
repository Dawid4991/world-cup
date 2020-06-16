const nowTime = new Date().getTime();
const endTime = new Date('2022-11-21 18:00:00').getTime();

const spanD = document.querySelector('span.d');
const spanH = document.querySelector('span.h');
const spanM = document.querySelector('span.m');
const spanS = document.querySelector('span.s');

setInterval(() => {
     const nowTime = new Date().getTime();
    const time = endTime - nowTime;
    let days = Math.floor((endTime / (1000 * 60 * 60 * 24))-(nowTime/(1000*60*60*24)));
     console.log(days);
     days = days < 10 ? `0${days}`: days;

     let hours =Math.floor((endTime/1000*60*60-nowTime/(1000*60*60)) % 24);
     hours = hours < 10 ? `0${hours}`: hours;

     let minuts =Math.floor((endTime/1000*60-nowTime/(1000*60)) % 60);
     minuts = minuts < 10 ? `0${minuts}`: minuts;

     let sec =Math.floor((endTime/1000-nowTime/(1000)) % 60);
     sec = sec < 10 ? `0${sec}`: sec;

spanS.textContent = sec;
spanM.textContent = minuts;
spanH.textContent = hours;
     spanD.textContent = days;
}, 1000)
