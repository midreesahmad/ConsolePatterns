const NUMBER = 6;
const NUMBER_OF_COLUMN = 6;
const NUMBER_OF_ROW = 6;

// 1.RECTANGLE

// for (let outer = 0; outer < NUMBER; outer++){
//     for (let inner = 0; inner < NUMBER; inner++) {
//         document.write("*&nbsp&nbsp");       // &nbsp
//     }
//     document.writeln("<br>");
// }

// 2. TRIANGLE BELOW TO PRIMARY DIAGONAL
// for (let outer = 0; outer < NUMBER; outer++) {
//     for (let inner = 0; inner < NUMBER; inner++) {
//         if (outer == inner)
//             document.write("&nbsp&nbsp");
//         if (inner < outer)
//             document.write("2&nbsp")
//         if (inner > outer)
//             document.write("&nbsp&nbsp")
//     }
//     document.write("<br>");
// }


// 3. TRIANGLE UPPER TO PRIMARY DIAGONAL
// for (let outer = 0; outer < NUMBER; outer++) {
//     for (let inner = 0; inner < NUMBER; inner++) {
//         if (outer == inner)
//             document.write("`&nbsp");
//         if (inner < outer)
//             document.write("&nbsp&nbsp")
//         if (inner > outer)
//             document.write("*")
//     }
//     document.write("<br>");
// }

// 4. TRIANGLE UPPER TO SECONDARY DIAGONAL

// for (let outer = 0; outer < NUMBER; outer++) {
//     for (let inner = NUMBER; inner >= 0; inner--) {
//         if (inner > outer)
//             document.write(`* `);
//         if (inner === outer)
//             document.write(`&nbsp&nbsp`);
//         if (inner < outer)
//             document.write(`&nbsp&nbsp`);

//         // document.write("*");
//     }
//     document.write(`<br>`);
// }


// 5. TRIANGLE LOWER TO SECONDARY DIAGONAL

// for (let outer = 0; outer < NUMBER; outer++) {
//     for (let inner = NUMBER; inner >= 0; inner--) {
//         if (inner > outer)
//             document.write(`&nbsp&nbsp&nbsp`);
//         if (inner === outer)
//             document.write(`&nbsp &nbsp`);
//         if (inner < outer)
//             document.write(`*&nbsp`);

//         // document.write("*");
//     }
//     document.write(`<br>`);
// }

// 6.  PRINTING SQUARE 

// for (let vertical = 0; vertical < NUMBER; vertical++) {
//     for (let horizontal = 0; horizontal < NUMBER; horizontal++) {
//         if (vertical == 0 || vertical == 5)
//             document.write(`*&nbsp&nbsp`);
//         else {
//             if (horizontal == 0 || horizontal == 5)
//                 document.write("*&nbsp&nbsp");
//                 else
//                 document.write(`&nbsp&nbsp&nbsp&nbsp`);
//         }
//     }
//     document.write("<br>");
// }

// 7. PRINTING TRIANGLE (upword tail)

// for (let vertical = NUMBER; vertical > 0; vertical--) {
//     for (let horizontal = 0; horizontal < NUMBER; horizontal++) {
//         if (horizontal >= vertical)
//             document.write(`&nbsp${horizontal}&nbsp`)
//         else
//             document.write(`&nbsp&nbsp`)
//     }

//     document.write("<br>")
// }


//  8. PRINTING TRIAGLE (Downword tail)      --well done!
// for (let vertical = NUMBER, tempVariable = 0; vertical > 0; tempVariable++, vertical--) {
//     for (let space = 0; space <= tempVariable; space++) {
//         document.write(`&nbsp`)
//     }
//     for (let horizontal = NUMBER; horizontal > 0; horizontal--) {
//         if (horizontal <= vertical)
//             document.write(`${vertical}&nbsp`);
//     }


//     document.write("<br>")
// }



// 9(a).  PRINTING PLUS IN A SQUARE
// let UpdatedNumber = NUMBER + 1;

// for (let vertical = 0; vertical <= UpdatedNumber; vertical++) {
//     for (let horizontal = 0; horizontal <= UpdatedNumber; horizontal++) {
//         if (vertical == 0 || vertical == UpdatedNumber || vertical == Math.floor((NUMBER + 1) / 2)) {       //for first, middle and last row
//             document.write(`${vertical}&nbsp`);
//         }
//         // if (vertical != 0 || vertical != UpdatedNumber || vertical != Math.floor((NUMBER + 1) / 2)) {
//         else {
//             if (horizontal == 0 || horizontal == UpdatedNumber || horizontal == Math.floor((NUMBER + 1) / 2))
//                 document.write(`${horizontal}&nbsp`);
//             else
//                 document.write(`&nbsp&nbsp&nbsp`);
//         }
//     }
//     document.write(`<br>`);     //to go to new line

// }


// 9 (B). PRINTING FOURS SQUARE/RECTANGLES IN A SQUARE
// let UpdatedNumber = NUMBER + 2;
// for (let vertical = 0; vertical <= UpdatedNumber; vertical++) {
//     for (let horizontal = 0; horizontal <= UpdatedNumber; horizontal++) {
//         if (vertical == 0 || vertical == UpdatedNumber || vertical == Math.floor(UpdatedNumber / 2)) {       //for first, middle and last row
//             document.write(`^ &nbsp`);
//         }
//         // if (vertical != 0 || vertical != UpdatedNumber || vertical != Math.floor((NUMBER + 1) / 2)) {
//         else {
//             if (horizontal == 0 || horizontal == UpdatedNumber || horizontal == Math.floor(UpdatedNumber / 2))
//                 document.write(`^ &nbsp`);
//             else
//                 document.write(`&nbsp*&nbsp`);
//         }
//     }
//     document.write(`<br>`);     //to go to new line
// }