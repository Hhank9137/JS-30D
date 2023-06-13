;(function() {
    const panels = document.querySelectorAll('.panel');
    console.log(panels)
    

    

    function clickHandler(){
        this.classList.toggle('open');
    }

    function transitionHandler(e){
        console.log(e)
        console.log(e.propertyName.indexOf('flex'))
        
        if(e.propertyName.indexOf('flex')!== -1){
            this.classList.toggle('open-active');
        }
        

    }
    // JQ: addClass / removeclass / toggleClass
    // JS: classList.add / classList.remove / classList.toggle  

    panels.forEach((panel) =>{
        panel.addEventListener('click', clickHandler);
        // 監聽點擊事件觸發事件(P_1)
        panel.addEventListener('transitionend', transitionHandler)
        // 監聽動畫結束觸發事件(P_2)
        // 
    })
    
})()