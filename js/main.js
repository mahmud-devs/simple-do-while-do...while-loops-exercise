/*====================================

    for loop, while loop , do-while loop

=====================================*/

// ================for loop==================

// for(let i = 0; i <= 10 ; i++){
//     console.log(`${i} X 4 = ${i * 4}  `);
// }
// ================while loop==================
// let g = 0;
// while (g<=10){
//     console.log(`${g} X 8 = ${g * 8}   `);
//     g++
// }
// ================do while loop==================
let res = '';
let m = 0;

do{
    res = res + m + ",";
    m++
} while(m <= 10);

console.log(`${res}`);


