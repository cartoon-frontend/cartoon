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
  let isBlinking = true;

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

document.addEventListener('DOMContentLoaded', function() { //首页按钮
  const homeButton = document.querySelector('.homeButton');
  homeButton.addEventListener('click', function() {
    const currentURL = window.location.href;
    window.location.href = currentURL;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const introButton = document.querySelector('.Tsize:nth-child(2)');

  introButton.addEventListener('click', function() {
    const mainContent = document.querySelectorAll('body > :not(.topHeading):not(#buttonContainer):not(.returnButton)');
    const weather = document.querySelector('#weather');

    mainContent.forEach(function(element) {
      element.remove();
    });

    if (weather) {
      weather.remove();
    }

    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    ul.style.listStyle = 'none';
    ul.style.transformStyle = 'preserve-3d';
    ul.style.perspective = '900px';
    ul.style.transition = '2s';
    ul.style.display = 'flex';
    ul.style.justifyContent = 'center';

    for (let i = 1; i <= 8; i++) {
      const li = document.createElement('li');
      const img = document.createElement('img');
      img.src = `./cartoonintroducepicture/${i}.jpg`; 
      li.appendChild(img);
      ul.appendChild(li);

      li.style.width = '243px';
      li.style.height = '350px';
      li.style.position = 'absolute';
      li.style.transformOrigin = 'left';
      li.style.transform = `rotateY(${-25 + (i - 1) * 2}deg)`;
      li.style.transition = `${2 - (i - 1) * 0.3}s`;
      li.style.transformStyle = 'preserve-3d';

      ul.addEventListener('mouseenter', function() {
        li.style.transform = 'rotateY(-180deg)';
        ul.style.transform = 'translateX(150px)';
      });

      ul.addEventListener('mouseleave', function() {
        li.style.transform = `rotateY(${-25 + (i - 1) * 2}deg)`;
        ul.style.transform = 'none';
      });

      img.style.width = '243px';
      img.style.height = '350px';
      img.style.boxShadow = '1px 4px 5px rgba(0,0,0,0.2)';
      img.style.transform = 'rotateY(180deg)';
    }
  });
});

