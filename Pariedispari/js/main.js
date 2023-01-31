//          Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



const buttonEvenEl = document.getElementById("pari");
const buttonOddEl = document.getElementById("dispari");

buttonEvenEl.addEventListener("click", function () {
  let choice = true;
  // numero scelto dall'utente -> const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
  const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));

  // il numero dev'essere da 1 a 5 e non NaN altrimenti si ripete il numero che deve dare
  if (isNaN(userNumber) || userNumber <= 0 || userNumber >= 6) {
    alert("inserisci correttamente");
  } else {
    // generiamo un numero random da 1 a 5 in una funzione -> const randomNumber = generateRandomN();
    const randomNumber = generateRandomNum();
    // let somma = 0;  somma = userNumber + randomNumber;
    let somma = 0;
    somma = userNumber + randomNumber;

    //SE SOMMA E' PARI MA CHOICE E' VERA (CHOICE VERA E' LEGATA A PARI) ALLORA VORRA' DIRE CHE NOI VINCEREMO
    if (isEven(somma) && choice) {
      console.log("HAI SCELTO PARI");
      console.log("il numero di somma", somma, "è pari");
      console.log("HAI VINTO");
      //SE SOMMA E' DISPARI E CHOICE E' VERA (CHOICE VERA E' LEGATA A PARI) ALLORA VORRA' DIRE CHE NOI PERDEREMO
    } else if (!isEven(somma) && choice) {
      console.log("HAI SCELTO PARI");
      console.log("il numero di somma", somma, "è dispari");
      console.log("HAI PERSO");
    }
  }
});


buttonOddEl.addEventListener("click", function () {
  let choice = false;
  // numero scelto dall'utente -> const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
  const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));

  // il numero dev'essere da 1 a 5 e non NaN altrimenti si ripete il numero che deve dare
  if (isNaN(userNumber) || userNumber <= 0 || userNumber >= 6) {
    alert("inserisci correttamente");
  } else {
    // generiamo un numero random da 1 a 5 in una funzione -> const randomNumber = generateRandomN();
    const randomNumber = generateRandomNum();
    // let somma = 0;  somma = userNumber + randomNumber;
    let somma = 0;
    somma = userNumber + randomNumber;

    //SE SOMMA E' PARI MA CHOICE E' FALSA (CHOICE FALSA E' LEGATA A DISPARI) ALLORA VORRA' DIRE CHE NOI PERDEREMO
    if (isEven(somma) && !choice) {
      console.log("HAI SCELTO DISPARI");
      console.log("il numero di somma", somma, "è pari");
      console.log("HAI PERSO");
      //SE SOMMA E' DISPARI E CHOICE E' FALSA (CHOICE FALSA E' LEGATA A DISPARI) ALLORA VORRA' DIRE CHE NOI VINCEREMO
    } else if (!isEven(somma) && !choice) {
      console.log("HAI SCELTO DISPARI");
      console.log("il numero di somma", somma, "è dispari");
      console.log("HAI VINTO");
    }
  }
});


//debugger;












//CREO UNA FUNZIONE CHE MI GENERI UN NUMERO RANDOM DA 1 A 5, FACENDOMI RITORNARE il valore di random.
function generateRandomNum(){
    const random = Math.floor(Math.random() *5 + 1); 
    return random;
}




//CREO UNA FUNZIONE isEven DOVE RITORNIAMO TRUE AL PARAMETRO PASSATO DIVISO 2 UGUALE A RESTO 0
function isEven(sum){
    return sum % 2 == 0;
}