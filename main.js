window.onload = function(){
    document.querySelector('.menu-bar').style.width='0px';
    var clock = document.querySelector('.card2');
    var interval;
    clock.addEventListener('mouseover', function(){
        interval = setInterval(() => {
            const time = document.querySelector('.clock div h1');
            let date = new Date();
            let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
            let minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
            let second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
            let times = hour + ":" + minute + ":" + second;
            time.setAttribute('data-text',times);
            time.textContent = times;
        });
    });

    clock.addEventListener('mouseout', function(){
        clearInterval(interval);
    })

    setSlidePage();
}

function setSlidePage(){
    document.querySelector('.slide').style.width = document.querySelectorAll('.slide-content').length * 100 + 'vw';
}

function menudrop(){
   var tmp = document.querySelector('.menu-bar');
   if(tmp.style.width == '0px'){
        tmp.style.width = '200px';
    } else {
        tmp.style.width = '0px';
    }
}

function slide(obj){
    var width = document.querySelector('.slide-content').offsetWidth;
    var slide = document.querySelector('.slide');
    var length = document.querySelectorAll('.slide-content').length - 1;
    var cur_offset = Number(slide.style.left.split('px')[0]);
    if(obj.className == 'arrow-left'){
        if(cur_offset < 0){
            slide.style.left = cur_offset + width + 'px';
        }
    } else if(obj.className == 'arrow-right'){
        if(cur_offset > width * (length * -1)){
            slide.style.left = cur_offset - width + 'px';
        }
    }
}


