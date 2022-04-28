//USER INPUTS A NUMBER
//COUNTER STARTS FROM 1 ALL THE WAY TO USERS INOUTTED NUMBER
//IF ANSWER IS DIVISIBLE BY 3 SHOW FIZZ
//IF ANSWER IS DIVISIBLE BY 5 SHOW BUZZ
//IF ANSWER IS DIVISIBLW BY BOTH 3 & 5 SHOW FIZZBUZZ
//IF NOT SHOW CURRENT ANSWER


let answer=parseInt(prompt('Please enter a number:'));


    for(let i=1; i<=answer; i++){
    if(i % 3===0 && i % 5===0){
    console.log('FizzBuzz')
}
    else if(1 % 5 ===0){
        console.log('Buzz')
    }
    
    else if(i % 3 === 0){
        console.log('Fizz')
    }
    else {console.log(i);}
}


