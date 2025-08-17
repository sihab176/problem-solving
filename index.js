//? Problem 1: Reverse a String    ========>

const name= "hello"
let reverse=""
for(let i = name.length-1 ; i >=0 ; i--){
    reverse =reverse + name[i]
}
console.log("reverse",reverse);




//? Problem 2: Count Vowels in a String =====>
const checkVowels="programming"
const demoVowels = "aeiouAEIOU"
let count=0
for( let j =0 ; j <checkVowels.length ; j++ ){
    if(checkVowels.includes(demoVowels[j])){
    count++
    }
}
console.log("Total vowels",count);




