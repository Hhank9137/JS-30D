(function() {
    const panels = document.querySelectorAll('.panel');
    console.log(panels)
    

    function clickHandler(){
        this.classList.toggle("open");
    }
    
    // JQ: addClass / removeclass / toggleClass
    // JS: classList.add / classList.remove / classList.toggle  

    panels.forEach((panel) =>{
        panel.addEventListener('click',clickHandler());
        
    })
})