const coinFlipper  = document.querySelector('h1');
coinFlipper.textContent = "Coin Flipper!"


let coinImage = document.querySelector('img');

const coinButton = document.querySelector('button');


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


coinButton.onclick = () => {
    
    let side = getRandomInt(2)
    console.log(side);

    if(side === 0){
        coinImage.setAttribute('src', 'images/tails.jpg');
        coinImage.setAttribute('width', '300');
        coinImage.setAttribute('length', '300');
    } else {
        coinImage.setAttribute('src', 'images/head.png');
        coinImage.setAttribute('width', '300');
        coinImage.setAttribute('length', '300');

    };
    
}
