console.log('JS OK!');  //controllo che lo script js sia collegato all'html


// step by step
// 1. recupero la griglia con l'id

// 2. creo N (100) div all'interno della griglia
//      2a: creo l'elemento
//      2b: aggiungo eventuali classi css per dargli uno stile
//      2c: associamo il numero da 1 a N al testo contenuto nella cella
//      2d: aggiungo l'elemento creato alla griglia
//      2e: aggiungo un listener sul click dell'elemento
//          2e-pt1: se non ha già lo sfondo azzurro lo metto
//          2e-pt2: se è già azzuro tolgo il colore dallo sfondo

//3.generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe (numeri nella lista delle bombe non possono essere duplicati)
//  3a:inizializzo vuoto l'array destinato a contenere i 16 numeri che rappresentano le bombe
//  3b:fintantochè la lunghezza dell'array è minore di 16
//     allora genera un numero random nell'intervallo [1,max] dove max è l'estremo superiore del range di difficoltà scelto dall'utente 
//          se il numero random generato non è presente (incluso) nell'array dei 16 numeri
//          allora aggiungilo all'array
//          fine se
//      ritorna l'array creato

//4. l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba
//   - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può 
//     continuare a cliccare sulle altre celle



//vado a selezionare (prendere) l'elemento (il div che rappresenta la griglia) nell'html
const griglia = document.getElementById('griglia');

const columns = 10;  //n° delle colonne della griglia
const rows = 10; //n° delle righe della griglia
const totalCells = columns * rows;  //n° totale di celle (di elementi) presenti nella griglia

const arrayDelleBombe = generaBombe(totalCells);

//con un ciclo for mi creo un numero totale di celle pari ad totalCells
for(let i = 0; i < totalCells;i++)
{
    //creo la singola cella presente nella griglia
    const cell = createCell();  /*creo, grazie alla chiamata della funzione,un elemento (oggetto) html, in 
                                  particolare trattasi di un div avente classe css '.cell' */

    /*cell.innerText = generateRandomNumber(1,100);   /*setto, tramite la funzione che ritorna un numero random compreso in
                                                    un range i cui estremi gli vengono passati come argomento, il testo contenuto
                                                    all'interno del div che rappresenta la singola cella della griglia*/

    cell.innerText = ( i + 1);  //I numeri della griglia vanno inseriti in ordine, da 1 a 100. Non in ordine casuale.

    //Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
    //faccio uso dell'ascoltatore dell'evento 'click'
    //cell.addEventListener('click',function(){
    /*    cell.classList.toggle('bg-azzurro');    /*Il metodo toggle() funziona in codesto modo: se la classe è associata al div che rappresenta la singola cella 
                                                  su cui l'utente clicca allora essa viene tolta altrimenti gli viene impostata;
                                                  e quindi se quella determinata cella su cui l'utente clicca ha già 
                                                  settata (assegnata,impostata) la classe che gli da lo sfondo azzurro allora
                                                  cliccandoci la classe viene rimossa e la cella perde lo sfondo azzurro altrimenti 
                                                  se la cella non presenta la classe che gli da lo sfondo allora al click dell'utente
                                                  la classe gli viene assegnata e quella cella assumerà sfondo azzurro.
                                                  Funziona come uno switch 
    });*/

    cell.addEventListener('click',function()
    {
        for(let i = 0; i < arrayDelleBombe.length; i++)
        {
            if(cell.innerText == arrayDelleBombe[i])
            {
                cell.classList.add('red');
                //griglia.style.pointerEvents = 'none';
                //alert('Hai perso!!!');
            }
            else{
                cell.classList.add('bg-azzurro');
            }

        }
       
    });

    griglia.appendChild(cell); //appendo il div appena creato che rappresenta la singola cella della griglia nel div che rappresenta la griglia stessa

}


const arrayCelleSenzaBombe = document.querySelectorAll('.bg-azzurro');  //array degli elementi html a cui è associata la classe .bg-azzurro
if( arrayCelleSenzaBombe.length == (totalCells - 16))   //se la lunghezza dell'array è uguale al n° totale delle celle della griglia meno il n° di celle contenenti le bombe allora l'utente vince
{
    alert('Complimenti hai vinto!!!');
    griglia.style.pointerEvents = 'none';

}


/*******************************************Implementazione delle funzioni**************************************/


/*funzione che crea un elemento (html) div provvisto di classe css con nome '.cell' */
function createCell()
{
    const item = document.createElement('div'); /*col metodo createElement() dell'oggetto document vado a creare un 
                                                 elemento (oggetto) html di tipo div;creo un elemento html in particolare un div*/
    item.classList.add('cell');    //aggiungo all'elemento div creato una classe css di nome '.cell'
    return item;    //restituisco al chiamante al termine della funzione l'elemento html (provvisto di classe css) creato
}

/*funzione che restituisce come output un numero random compreso in un range i cui estremi sono passati come argomento dall'utente */
function generateRandomNumber(min,max)
{
    const range = max - min + 1;
    const numeroRandom = Math.floor(Math.random()*range + min);
    return numeroRandom;
}

/*funzione che genera le 16 bombe ovvero 16 numeri random compresi nello stesso range del livello di difficoltà.
Essa riceve come parametro d'ingresso il n° massimo a cui si può valorizzare il range di bombe (cioè l'estremo superiore 
del range in cui verranno pescati i numeri random) e ritorna l'array che contiene i 16 numeri generati randomicamente contenuti in 
quel range.
Questa funzione prende in ingresso l'estremo superiore del range nel quale può essere generato random il numero e 
ritorna un array contentente 16 numeri pescati random nel suddetto range!!!*/
function generaBombe(max)
{
    const arrayDelleBombe = [];    /*array che contiene le bombe ossia i 16 numeri creati random ed appartenenti al range [1,max]*/

    //ciclo sino a quando l'array position non diventa lungo 16

    while(arrayDelleBombe.length < 16){ //fintantochè la lunghezza dell'arrar è minore di 16 genera un numero random nell'intervallo [1,max]
        const number = generateRandomNumber(1,max); //faccio uso della funzione così da generare un numero random compreso nell'intervallo [1,max]
        if(!arrayDelleBombe.includes(number))   //se il numero generato non  è già presente(incluso) nell'array dei 16 numeri (le bombe) allora aggiungilo(pushalo) nell'array
        {
            arrayDelleBombe.push(number);
        }
    }
    return arrayDelleBombe; //ritorno l'array delle bombe
}
