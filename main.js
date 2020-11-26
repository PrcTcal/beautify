window.onload = function(){
    document.querySelector('.menu-bar').style.height='0px';
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
}

function menudrop(){
    var bar = document.querySelector('.menu-bar');
    if(bar.style.height == '0px'){
        bar.style.height = '140px';
    } else {
        bar.style.height = '0px';
    }
}

function slide(obj){
    var width = document.querySelector('.slide-content').offsetWidth;
    var slide = document.querySelector('.slide');
    var cur_offset = Number(slide.style.left.split('px')[0]);
    if(obj.className == 'arrow-left'){
        if(cur_offset < 0){
            slide.style.left = cur_offset + width + 'px';
        }
    } else if(obj.className == 'arrow-right'){
        if(cur_offset > width * -2){
            slide.style.left = cur_offset - width + 'px';
        }
    }
}


