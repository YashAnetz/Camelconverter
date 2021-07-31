'use strict'

let button = document.querySelector(".but")
let input = document.querySelector(".in")
let output = document.querySelector(".output")
let click=0;


button.addEventListener('click',function()
{


    click=click+1;

    if(input.value==0)
    {
        output.textContent="invalid"
    }

   let str=input.value;
 
   let str1=str.split("_")
let str2= str1[1]
let strl1=str1[1][0].toUpperCase()
let strl2 = str2.slice(1);
let word2 =strl1+strl2;
let word1 = str1[0]
let final = word1+word2;
console.log(final+ "✅".repeat(click));
output.textContent=final




    
})


/*

underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure

*/ 




