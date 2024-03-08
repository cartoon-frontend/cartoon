document.addEventListener('DOMContentLoaded', function() {
  let arrPicture = ['./pic/picture1.png', './pic/picture2.png', './pic/picture3.jpg'];

  let bigPicture = document.querySelector('#randomBackGround');

  let randomIndex = Math.floor(Math.random() * arrPicture.length);
  let randomImage = arrPicture[randomIndex];

  bigPicture.style.backgroundImage = `url(${randomImage})`;
  bigPicture.style.backgroundRepeat = 'no-repeat';
  bigPicture.style.backgroundSize = '100% 100%';
  bigPicture.style.height = '100vh';
  bigPicture.style.width = '100vw';
// ========================輪播圖function===========================
  const images = document.querySelectorAll('.box');

  images.forEach(image => {
    image.addEventListener('click', () => {
      expandImage(image);
    });
  });

  function expandImage(image) {
    // 清除之前的展开图片容器
    const previousExpandedContainer = document.querySelector('.expanded-image-container');
    if (previousExpandedContainer) {
        document.body.removeChild(previousExpandedContainer);
    }

    const imageUrl = image.style.backgroundImage.replace(/^url\(['"](.+)['"]\)$/, '$1');
    const expandedContainer = document.createElement('div');
    const expandedImage = document.createElement('img');

    expandedContainer.classList.add('expanded-image-container');
    expandedImage.classList.add('expanded-image');

    expandedImage.src = imageUrl;

    expandedContainer.appendChild(expandedImage);

    document.body.appendChild(expandedContainer);

    // 在添加到文档后再显示
    expandedContainer.style.display = 'flex';
    // 添加点击事件监听器，点击任意位置关闭图片展示
    expandedContainer.addEventListener('click', () => {
        document.body.removeChild(expandedContainer);
    });

    // 添加文档点击事件监听器，点击任意位置关闭图片展示
    document.addEventListener('click', (event) => {
        if (!expandedContainer.contains(event.target) && event.target !== image) {
            document.body.removeChild(expandedContainer);
        }
    });

    expandedImage.addEventListener('click', () => {
        document.body.removeChild(expandedContainer);
    });
}

});
// ========================輪播圖function===========================


    
