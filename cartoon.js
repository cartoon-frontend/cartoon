document.addEventListener('DOMContentLoaded', function() {
  const arrPicture = ['./backgroundpicture/1.png', './backgroundpicture/2.png', './backgroundpicture/3.jpg'];

  const bigPicture = document.querySelector('#randomBackGround');
  const randomIndex = Math.floor(Math.random() * arrPicture.length);
  const randomImage = arrPicture[randomIndex];

  bigPicture.style.backgroundImage = `url(${randomImage})`;
  bigPicture.style.backgroundRepeat = 'no-repeat';
  bigPicture.style.backgroundSize = '100% 100%';
  bigPicture.style.height = '100vh';
  bigPicture.style.width = '98vw';
  bigPicture.style.opacity = '0.7'; 
});

function returnButton() {
  const neonImage = document.getElementById('neonImage');
  const returnTopButton = document.getElementById('returnTop');
  const isBlinking = true;

  returnTopButton.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  neonImage.addEventListener('click', function() {
      if (isBlinking) {
          neonImage.classList.remove('neonBlink');
          neonImage.classList.add('grayedOut');
          isBlinking = false;
      } else {
          neonImage.classList.add('neonBlink');
          neonImage.classList.remove('grayedOut');
          isBlinking = true;
      }
  });

  neonImage.classList.add('neonBlink');
}

returnButton();