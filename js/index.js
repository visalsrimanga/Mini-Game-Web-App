const player = document.getElementById('player');
const ground = document.getElementById('ground');
const crows = document.getElementById('crows');
let dx = 0;
let dy = 0;
let acceleration = 0.1;
let index = 1;
let crowsX = 0;

const animate = ()=>{

    /* Animation part of the image */
    if(dx !== 0){
        player.style.backgroundImage = `url('img/Run\ \(${index++}\).png')`;
    } else if(dy > 0.6 || dy < 0){
        player.style.backgroundImage = `url('img/Jump\ \(${index++}\).png')`;
    } else{
        player.style.backgroundImage = `url('img/Idle\ \(${index++}\).png')`;
    }
    if(index > 8) index = 1;



    if(((player.offsetLeft+player.offsetWidth+dx)>=innerWidth)){
        dx=0;
        player.style.left=`${innerWidth-player.offsetWidth}px`;
    }else if(player.offsetLeft<0){
        dx=0;
        player.style.left='0';
    }

    if((player.offsetTop + player.offsetHeight)> ground.offsetTop){
        dy = 0;
        player.style.top = `${ground.offsetTop - player.offsetHeight}px`
    } else if(player.offsetTop < 0){
        dy = .5;
    }

    dy+=acceleration;

    player.style.left= `${player.offsetLeft+dx}px`;
    player.style.top= `${player.offsetTop+dy}px`;


    /* crows flying animations */


    requestAnimationFrame(animate);
}




addEventListener('keydown',({key})=>{
    if(key === 'ArrowRight'){
        index= 1;
        player.classList.remove('turn');
        dx = 10;
    } else if(key == 'ArrowLeft'){
        index = 1;
        player.classList.add('turn');
        dx = -10;
    }
    
});


addEventListener('keypress',({key})=>{
    index = 1;
    if(key === ' '){
        dy = -7;
    }
});

addEventListener('keyup',({key})=>{
    if(key === 'ArrowRight' || key == 'ArrowLeft'){
        dx = 0;
    }
});

requestAnimationFrame(animate);


// let j = 0;
// let t1 = 0;
// const interval = 1;

// function repaint(timestamp){
//     if (!t1) t1 = timestamp;
//     const diff = timestamp - t1;
//     if (diff >= (interval * 1000)){
//         t1 = timestamp;
//         console.log('Painted : ', j++);    
//     }
//     requestAnimationFrame(repaint);
// }
// requestAnimationFrame(repaint);