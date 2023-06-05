(function(){
    const hour = document.querySelector('.hour-hand')
    const min = document.querySelector('.min-hand')
    const second = document.querySelector('.second-hand')
    const divDate = document.querySelector('.date')
    // console.log(hour, min, second)

    function setClock(){ 
        const date = new Date()
        console.log(date)
        divDate.innerHTML = date;
        let secondDeg = date.getSeconds() * 6 // (360/60)
        let minDeg = date.getMinutes() * 6 + date.getSeconds() * 6 / 60 // (360/60)
        let hourDeg = date.getHours() * 30 + date.getMinutes() * 30 / 60 // (360/12)、分鐘乘３０度，再除(每小時60分)
        // console.log(secondDeg)

        second.style.transform = `rotate(${secondDeg}deg)`;
        min.style.transform = `rotate(${minDeg}deg)`;
        hour.style.transform = `rotate(${hourDeg}deg)`;

    }
    
    // setClock() //初始化畫面
    setInterval(setClock,1000)  //把setClock()函示，以1000毫秒(1秒)執行一次（持續執行）
})()