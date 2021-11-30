const hour = document.getElementById('hourhand');
const minute = document.getElementById('minhand');
const second = document.getElementById('sechand');

setInterval(()=>{
    let date=new Date();
    let hourhand=date.getHours()*30;
    let minhand=date.getMinutes()*6;
    let sechand=date.getSeconds()*6;

    hour.style.transform=`rotateZ(${(hourhand)+(minhand/12)}deg)`;
    minute.style.transform=`rotateZ(${minhand}deg)`;
    second.style.transform=`rotateZ(${sechand}deg)`;
})


