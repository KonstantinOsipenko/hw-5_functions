///exersice 1
let n = 5;
let p = 2;
console.log(Math.pow(n,p))
function pow () {
    const initialNumber = n;
    if (p===0) return 1;
    for (let i = 1; i < p; i++) {
        n*=initialNumber        
    }
    return n;
};
console.log(pow());
////exercise 2
function getRandom() {
    return Math.floor(Math.random()*10);
}
function game (){
    let randomNumber = getRandom();
    for (userNumber; ; userNumber == randomNumber, userNumber ){
    { if (userNumber == randomNumber) {
        return confirm ('You win'); 
     } else if ( userNumber == null || userNumber == '')  { 
        return  confirm ('You wanna go?'); 
    } else if (userNumber != randomNumber){ 
        userNumber = + prompt ('try again'); }
     }
}
}
function getNumber () {
    userNumber = + prompt('Enter a number between 1 and 9');
    game();
}
getNumber();

 