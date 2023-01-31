//      Palidroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


const userWord = prompt("Inserisci una parola");




if (isPalindrome(userWord)){
    console.log("La parola è palindroma");
}else{
    console.log("La parola non è palindroma");
}



function isPalindrome(word){
    //debugger;
    let checkWord= "";
    const fromLastIndex = word.length - 1;

    for(let i = fromLastIndex; i >= 0; i--){
        checkWord += word[i];

    }

    return checkWord == word;

}