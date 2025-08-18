//? Problem 1: Reverse a String    ========>

const name= "hello"
let reverse=""
for(let i = name.length-1 ; i >=0 ; i--){
    reverse =reverse + name[i]
}
// console.log("reverse",reverse);




//? Problem 2: Count Vowels in a String =====>
function findVowel(params){
    const demoVowels = "aeiouAEIOU"
    let count=0
    for( let j =0 ; j <params.length ; j++ ){
    if(demoVowels.includes(params[j])){
    count++
    }
    
}
 return count;
}
// console.log("Total vowels",findVowel("programming"));



//?problem 3 : Check for Palindrome  =======>

function palindrome(params) {
    const convert= params.toLowerCase()
    const data=convert.split("").reverse().join("")
    const check = convert === data
    return check
}
// console.log("Palindrome", palindrome("Madam"))

//? Problem 4: Find the Maximum Number========>
function findMaximumNumber(params){
    const result= Math.max(...params)
    return result
}
// console.log(findMaximumNumber([5, 1, 9, 3]));



//? Problem 5: Remove Duplicates from an Array ===>
function removeDuplicate(params){
    const newArray= []
    for(let k =0 ; k < params.length ; k++){
        if(!newArray.includes(params[k])){
            newArray.push(params[k])
        }
    }
    return newArray
    
}
// console.log(removeDuplicate([1, 2, 2, 3, 4, 4]));

//? Problem 6: Sum of All Numbers in an Array =====>
function totalSum(params){

    let sum=0
    for(let l = 0 ; l<params.length ; l++){
        sum = sum+params[l]
    }
    return sum

}
// console.log("sum :" ,totalSum([1, 2, 3, 4,]));


// ?Problem 7: Find Even Numbers in an Array ======>
function findEven(params){
   let evenArray=[]
   for(let m=0 ; m<params.length; m++){
    if(params[m] % 2 ===0){
        evenArray.push(params[m])
    }
   }
   return evenArray
}

// console.log(findEven([1,2,3,4,5]));



//? Problem 8: Capitalize First Letter of Each Word ====>
function capitalize(params){
   let word = params.split(" ")
   let result=[]
   for(let i=0 ; i<word.length ; i++){
    result.push(word[i].charAt(0).toUpperCase() + word[i].slice(1))
    
   }
return result.join(" ")
}
// console.log(capitalize("hello world"));


//? Problem 9: Find the Factorial of a Number ===========>

   function factorial(params){
    let result=1
    for(let l=1 ; l <=params ; l++){
       result = result * l
    }
    return result
   }

//    console.log(factorial(5));

