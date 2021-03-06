// VARIABLES FOR THE HTML CLASSES
let button = document.querySelector('.button');
let inputValue = document.querySelector('.inputValue');
let word = document.querySelector('.word');
let partsOfSpeech = document.querySelector('.pos');
let meaning = document.querySelector('.meaning');
let offensives = document.querySelector('.offensives');
let synonym = document.querySelector('.synonym');


button.addEventListener('click', function () {
  fetch('https://dictionaryapi.com/api/v3/references/thesaurus/json/'+ inputValue.value + '?key=fa4375c4-6ed4-4766-b83c-127e42837c71')
    .then(response => response.json())
    .then(data => {

      let wordValue = '*' + data[0].hwi.hw + '*'; // The word itself
      let posValue = 'a'+ ' ' + data[0].fl; // The part of speech
      let meaningValue =  `Definition: `+ data[0].shortdef; // A short definition
      let offensivesValue = `Offensive word? `+ data[0]['meta'].offensive; //Checking if the word is offensive
      let synonymValue = `Synonyms: ` + data[0]['meta']['syns'][0] ; // The synonyms
      let synonymValueMax =  synonymValue.split(",").slice(0, 5).join(", "); //Spacing & limit the synonym list to 5 examples max
      
      
       // DISPLAY SECTION COMPONENTS
       word.innerHTML = wordValue;
       partsOfSpeech.innerHTML = posValue;
       meaning.innerHTML = meaningValue;
       offensives.innerHTML = offensivesValue;
       synonym.innerHTML =  synonymValueMax;
    })

    .catch(err => alert("Wrong word or spelling!"));
})




