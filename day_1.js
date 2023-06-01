(function(){

    window.addEventListener('keydown',playHandler);

    function playHandler(e){
        console.log(e.keyCode)
        // play music

        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        if(audio) {
            audio.currentTime = 0;
            audio.play(audio);
        };
        // 如果audio存在了話，執行播放對映到的編號


        // dom style

        const dom = document.querySelector(`div[data-key="${e.keyCode}"]`);
        if(dom) {
            dom.classList.add('playing');
        };
        // 如果dom存在了話，執行在data key的class 加上playing

        console.log(audio,dom);
    }
    

  

})()