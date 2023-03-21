/**
 *  - tipo-03.ts
 *
 * Crea un'interfaccia per rappresentare un prodotto
 * con le seguenti proprietà: nome (stringa),
 *  prezzo (numero) e disponibilità (booleano).
 * Crea una funzione che accetta un array di prodotti
 *  come parametro e restituisce un nuovo array
 * contenente solo i prodotti disponibili.
 */
console.log("=====[ tipo-03.ts ]=====");
var prodotto1 = {
    nome: "L'alchimista",
    prezzo: 20,
    disponbilita: true
};
var prodotto2 = { nome: "La casta", prezzo: 15, disponbilita: true };
var prodotto3 = {
    nome: "Fatto in casa da Benedetta",
    prezzo: 20,
    disponbilita: false
};
var prodotto4 = { nome: "1984", prezzo: 16, disponbilita: false };
var listaProdotti = [prodotto1, prodotto2, prodotto3, prodotto4];
/**
 * La funzione prende in ingresso una lista di prodotti,
 * fornisce in uscita la lista dei soli prodotti disponibili
 *
 * @param listaProdotti
 */
function disponibile(listaProdotti) {
    var result = [];
    for (var i = 0; i < listaProdotti.length; i++) {
        var p = listaProdotti[i];
        if (p.disponbilita == true) {
            result.push(p);
        }
    }
    return result;
}
var listaDisponibili = disponibile(listaProdotti);
console.log(listaDisponibili);
