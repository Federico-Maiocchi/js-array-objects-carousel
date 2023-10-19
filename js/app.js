// console.log('Carousel');

// - prendiamo l'elemento gallery nel DOM dove inseriremo tutti gli utenti
const galleryDomElement = document.querySelector('.gallery');

// - fare un array di oggetti dove ci sarà la lista dei membri del team con i loro dettagli (proprietà)
//     - image
//     - title
//     - text

const images = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: 'img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
]

// Ciclo forEach

// Array.forEach(element, index, array) => {

// }

images.forEach((usersCurrent, index) => {

    const imagesCurrent = images[index];
    console.log(imagesCurrent)

    // prendere nome 
    const image = usersCurrent.image;
    // console.log(image);

    // predere il titolo
    const title = usersCurrent.title;
    // console.log(title);

    // prendere il testo
    const text = usersCurrent.text;
    // console.log(text);

    const htmlStringImages = `
    <div class="wrapper-image">
        <div class="image">
            <img src="./${image}" alt="${title}">
        </div>
        <span class="biography">
            <h1 class="title-image">${title}</h1>
            <p class="paragraph-image">${text}</p>
        </span>
    </div>
    `
    // console.log(htmlStringImages);

    // - stampo nel DOM dento al div contenete la classe row, le stringhe degli utenti prese dall'array
    galleryDomElement.innerHTML += htmlStringImages;

})

// seleziono tutti gli elementi del dom 
const imageSelectDomElements = document.querySelectorAll('.wrapper-image');
// console.log(imageSelectDomElement);

// indichiamo la prima immaggine che ha valore 0 nell' array 
let indexImageCurrent = 0;

// attivo la prima immagine con la class active, gli altri elementi hanno display none
let firstCurrent = imageSelectDomElements[indexImageCurrent];
firstCurrent.classList.add('active');




// recuperiamo il bottone inferiore dal dom
const btnDownDocElement = document.querySelector('.btn-down');

// recupero dal dom il bottone superiore
const btnUpDocElement = document.querySelector('.btn-up');

// funzione per decrementare e incrementare
function updateCurrentIndex(change) {
    // incremento
    if (change === 'plus') {
        if (indexImageCurrent === imageSelectDomElements.length - 1) {
            indexImageCurrent = 0;
        } else {
            indexImageCurrent++;
        }
    // Cambia decremento    
    } else if (change === 'minus') {  
        if (indexImageCurrent === 0) {
            indexImageCurrent = imageSelectDomElements.length - 1;
        } else {
            indexImageCurrent--;
        }
    }
}


// Aggiorna le chiamate alle funzioni addRemoveBtn nei gestori di eventi
btnDownDocElement.addEventListener('click', function () {
    
    // 'plus' perché vuoi incrementare l'indice quando premi "down"
    addRemoveBtn('plus');
    
});

btnUpDocElement.addEventListener('click', function () {
    // 'minus' perché vuoi decrementare l'indice quando premi "up"
    addRemoveBtn('minus');  
});



function addRemoveBtn(change) {
    imageSelectDomElements[indexImageCurrent].classList.remove('active');
    updateCurrentIndex(change);
    imageSelectDomElements[indexImageCurrent].classList.add('active');
}


// function updateCurrentIndex(change) {

//     console.log('Before:', indexImageCurrent);

//     if (change === 'plus') {
        
//         if (indexImageCurrent === imageSelectDomElements.length - 1) {
//             indexImageCurrent = 0;
//         } else {
//             indexImageCurrent++;
//         }

//     } else {
//         if (indexImageCurrent === 0) {
//             indexImageCurrent = imageSelectDomElements.length - 1;
//         } else {
//             indexImageCurrent--;
//         }
//     }

//     console.log('After:', indexImageCurrent);
   
// }


// function addRemoveBtn(change){
//     imageSelectDomElements[indexImageCurrent].classList.remove('active');
//     updateCurrentIndex(change);
//     imageSelectDomElements[indexImageCurrent].classList.add('active');

    
// }
