


document.addEventListener('DOMContentLoaded', function() {
    let arrPicture = ['./picture/picture1.png', './picture/picture2.png', './picture/picture3.jpg'];
  
    let bigPicture = document.querySelector('#randomBackGround');
  
    let randomIndex = Math.floor(Math.random() * arrPicture.length);
    let randomImage = arrPicture[randomIndex];
  
    bigPicture.style.backgroundImage = `url(${randomImage})`;
    bigPicture.style.backgroundRepeat = 'no-repeat';
    bigPicture.style.backgroundSize = '100% 100%';
    bigPicture.style.height = '100vh';
    bigPicture.style.width = '100vw';
  });

    let returnTop = document.querySelector('#returnTop')
    console.log(returnTop);
    