let button = document.querySelector('.btn1');
button.addEventListener('click',function(){
    let heading = document.querySelector('#heading1');
    let colortxt = gencolor();
    heading.innerText = colortxt;    
    let div = document.querySelector('div');
    div.style.backgroundColor = colortxt;
    console.log("color updated")
});

function gencolor (){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let colors = `rgb(${red},${blue},${green})`;
    return colors;
}

let keyb = document.querySelector('input');
keyb.addEventListener('keydown',function(event){
    if(event.code =="ArrowUp"){ console.log('character up');}
    else if(event.code =="ArrowDown"){ console.log('character Down');}
    else if(event.code =="ArrowRight"){ console.log('character Right');}
    else if(event.code =="ArrowLeft"){ console.log('character Left');}
})