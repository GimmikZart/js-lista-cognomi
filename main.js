
// dichiarazioni variabili -------------------------------------------------

var cognomeUtente;
var listaCognomi;
var listaOrdinata;
var cognome;
var elementoLista;
var indice;


// dichiaro la lista array dei cognomi------------------------------------------------
listaCognomi = ["Rossi","Bianchi","Foti","Vargas","Marchi","Zorro"]


// Chiedi all’utente il cognome  ----------------------------------------------------
cognomeUtente = prompt("scrivi qua il tuo cognome con la prima lettera maiuscola");



// inseriscilo in un array con altri cognomi ----------------------------------------
listaCognomi.push(cognomeUtente); //ora il cognome utente verrà inserito dentro l'array


// ordino la lista dell'array -------------------------------------------------------
listaOrdinata = listaCognomi.sort();


// inizio il ciclo per creare la lista ------------------------------------------------
var i = 0;
while (i < listaOrdinata.length) {
  cognome = listaOrdinata[i];
  elementoLista = document.getElementById("lista").innerHTML;
  i++;
  // stampo la lista ordinata alfabeticamente--------------------------------------------
  document.getElementById("lista").innerHTML = elementoLista + "<li>" + cognome + "</li>";
}

// Scrivi la posizione della lista in cui il nuovo utente si trova

indice = (listaOrdinata.indexOf(cognomeUtente)) + 1;

document.getElementById("indice").innerHTML = "Il tuo cognome si trova alla posizione numero " + indice;
