
document.addEventListener('DOMContentLoaded', function() {
    transformHeader();
    transformCards();
    transformList();
    transformMenu();
});

function transformHeader() {
    const jumbotron = document.querySelector('.jumbotron');
    const title = jumbotron.querySelector('.display-4');
    const leadParagraph = jumbotron.querySelector('.lead');
    const secondParagraph = jumbotron.querySelector('p:not(.lead)');
    const button = jumbotron.querySelector('.btn');
   
    jumbotron.style.backgroundColor = '#343a40';
    jumbotron.style.color = 'white';

    title.style.textAlign = 'right';
    title.style.color = 'white';
    
    leadParagraph.style.textAlign = 'right';
    leadParagraph.style.color = 'white';
  
    secondParagraph.style.textAlign = 'right';
    secondParagraph.style.color = 'white';
    
    button.classList.remove('btn-primary');
    button.classList.add('btn-success');
    button.style.float = 'right';
}

function transformCards() {
    const cardsContainer = document.querySelector('.row:nth-of-type(3)');
    const cards = Array.from(cardsContainer.querySelectorAll('.col-lg-3'));
 
    const naturezaCard = cards.find(card => card.querySelector('.card-title').textContent === 'Natureza');
    const animaisCard = cards.find(card => card.querySelector('.card-title').textContent === 'Animais');
    const pessoasCard = cards.find(card => card.querySelector('.card-title').textContent === 'Pessoas');
    const tecnologiaCard = cards.find(card => card.querySelector('.card-title').textContent === 'Tecnologia');
  
    cards.forEach(card => card.remove());
 
    cardsContainer.appendChild(naturezaCard);
    cardsContainer.appendChild(animaisCard);
    cardsContainer.appendChild(pessoasCard);
    cardsContainer.appendChild(tecnologiaCard);
    
    const animaisButton = animaisCard.querySelector('.btn');
    animaisButton.classList.remove('btn-primary');
    animaisButton.classList.add('btn-success');
}

function transformList() {
    const listGroup = document.querySelector('.list-group');

    const firstItem = listGroup.querySelector('.list-group-item.active');
    firstItem.classList.remove('active');

    const fourthItem = document.createElement('li');
    fourthItem.className = 'list-group-item active';
    fourthItem.textContent = 'Quarto item';
    
    const fifthItem = document.createElement('li');
    fifthItem.className = 'list-group-item';
    fifthItem.textContent = 'Quinto item';
 
    listGroup.appendChild(fourthItem);
    listGroup.appendChild(fifthItem);
}

function transformMenu() {
    const menuContainer = document.querySelector('.btn-group-vertical');
    const buttons = Array.from(menuContainer.querySelectorAll('.btn'));
 
    menuContainer.classList.remove('btn-group-vertical');
    menuContainer.classList.add('btn-group');
    menuContainer.setAttribute('role', 'group');
    menuContainer.setAttribute('aria-label', 'Horizontal button group');

    buttons.forEach(button => {
        button.style.marginRight = '5px';
        button.style.borderRadius = '5px';
    });
}
