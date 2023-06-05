(function(){
    const hour = document.querySelector('.hour-hand')
    const min = document.querySelector('.min-hand')
    const second = document.querySelector('.second-hand')
    // console.log(hour, min, second)

    function setClock(){
        const date = new Date()

        let secondDeg = date.getSeconds() * 6 // (360/60)
        let minDeg = date.getMinutes() * 6 // (360/60)
        let hourDeg = date.getHours() * 30 // (360/12)
        // console.log(secondDeg)

        second.style.transform = `rotate(${secondDeg}deg)`;
        min.style.transform = `rotate(${minDeg}deg)`;
        hour.style.transform = `rotate(${hourDeg}deg)`;

    }
    setClock() //初始化畫面
    setInterval(setClock,1000)
})()