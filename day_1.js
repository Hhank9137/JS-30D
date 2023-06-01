(function(){

    window.addEventListener('keydown',playHandler);

    function playHandler(e){
        console.log(e.keyCode)

        
        // play music

        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

        // dom style
        const dom = document.querySelector(`div[data-key="${e.keyCode}"]`);
        console.log(audio);
       
    }
})()