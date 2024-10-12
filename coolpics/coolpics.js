
const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('hide');
});


function handleResize() {
  const navLinks = document.querySelector('.nav-links');
  if (window.innerWidth > 1000) {
    navLinks.classList.remove('hide');
  } else {
    navLinks.classList.add('hide');
  }
}

handleResize(); 
window.addEventListener('resize', handleResize);


function viewerTemplate(pic, alt) {
  return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
  </div>`;
}

function viewHandler(event) {
  const imgElement = event.target;
  const imgSrc = imgElement.src.replace('-sm', '-full'); 
  const altText = imgElement.alt;
  document.body.insertAdjacentHTML('afterbegin', viewerTemplate(imgSrc, altText));

  const closeButton = document.querySelector('.close-viewer');
  closeButton.addEventListener('click', closeViewer);
}

function closeViewer() {
  const viewer = document.querySelector('.viewer');
  viewer.remove(); 
}


document.querySelector('.gallery').addEventListener('click', viewHandler);
