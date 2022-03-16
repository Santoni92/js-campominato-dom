console.log('JS OK!');  //controllo che lo script js sia collegato all'html



//vado a selezionare (prendere) l'elemento (il div che rappresenta la griglia) nell'html
const griglia = document.getElementById('griglia');

const columns = 10;  //n° delle colonne della griglia
const rows = 10; //n° delle righe della griglia
const totalCells = columns * rows;  //n° totale di celle (di elementi) presenti nella griglia

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
    cell.addEventListener('click',function(){
        cell.classList.toggle('bg-azzurro');    /*Il metodo toggle() funziona in codesto modo: se la classe è associata al div che rappresenta la singola cella 
                                                  su cui l'utente clicca allora essa viene tolta altrimenti gli viene impostata;
                                                  e quindi se quella determinata cella su cui l'utente clicca ha già 
                                                  settata (assegnata,impostata) la classe che gli da lo sfondo azzurro allora
                                                  cliccandoci la classe viene rimossa e la cella perde lo sfondo azzurro altrimenti 
                                                  se la cella non presenta la classe che gli da lo sfondo allora al click dell'utente
                                                  la classe gli viene assegnata e quella cella assumerà sfondo azzurro.
                                                  Funziona come uno switch */
    });


    griglia.appendChild(cell); //appendo il div appena creato che rappresenta la singola cella della griglia nel div che rappresenta la griglia stessa

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