window.onload = function(){
    document.querySelector('.menu-bar').style.height='0px';
}

function menudrop(){
    console.log('start');
    var bar = document.querySelector('.menu-bar');
    if(bar.style.height == '0px'){
        console.log('늘리기')
        bar.style.height = '140px';
    } else {
        console.log('줄이기');
        bar.style.height = '0px';
    }
}