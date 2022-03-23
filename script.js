// function summ() {
//     let a = 5 + 6
//     return a
// }
// console.log(summ());   

// function summ(a,b = 10) {
//     return a + b;
// }
// let x = +prompt('son ')
// console.log(summ(15));
// console.log(summ(100,200));
// console.log(summ(20,x));

// console.log(Math.floor(1.9));//Yaxlitlash kichik tomonga
// console.log(Math.ceil(1.2));//Yaxlitlash katta tomonga
// console.log(Math.round(1.5));// Normal Yaxlitlash 
// console.log(Math.random());// 0 dan 1 gacha tasodifiy son chiqarib beradi, lekin 1 chiqmaydi 0 chiqadi.




// function random(max = 100 , min = 0){
//   return Math.floor(Math.random() * (max + 1 - min) + min);
// }
// function generateColor(){
//     let r = random ( 255, 0);
//     let g = random ( 255, 0);
//     let b = random ( 255, 0);
//     return "rgb ( " + r + " ," + g + " ," + b + ")";
// }

// document.body.style.background = generateColor()




//  Tashqi uzgaruvchilar ============================================


// let userName = 'Jamshid'

// function showMessage() {
//   userName = 'Bob'
//   let message = 'Hello ' + userName;
//   alert(message);
// }

// alert(userName);
// showMessage();
// alert(userName);



//  Parametrlar ==========================================

// function showMessage(from,text){  // ( from bn text parametrlar)
//   alert( from + ' : ' + text )
// }

// showMessage("Ann","Hello"); // showMessage ichidagilar esa argument
// showMessage("Ann","What's up?")


// Qiymatni qaytarish ====================================

// function sum(a,b) {
//   return a + b;
// }

// let result = sum(3,5)
// alert(result);


// function checkAge(age) {
//   if(age >= 18){
//     return true;
//   }else{
//     return confirm ('Do you have permission from your parents')
//   }
// }

// let age = +prompt('How old are you?' , 18)

// if( checkAge(age)){
//   alert( 'Access granted' );
// }else{
//   alert( 'Access denied' );
// }

// 1-misol

// function min( a , b ) {
//   return(a<b) ? a : b;
// }
// console.log(min(2, 5));



//  2-Misol ============================


// function pow(x, y) {
//   let result = 1;
//   for( let i = 0; i < y; i++){
//     result = result * x;
//   }

//   return result;
// }

// let x = +prompt('Son kiriting')
// let y = +prompt('Darajani kiriting');

// alert(pow(x,y));


// let x = +prompt('Son kiriting');
// let y = +prompt('Darajani kiriting');

// let result = 1;

// for( let i = 0; i < y; i++){
//   result = result * x;
// }

// console.log(result);


// function pow(x,y){
//   return x ** y
// }

// console.log(pow(10,4));


// 3 xil usulini kurib chiqdik darajaga kutarishni



// 4-chi Misol =================================================================

function random(max = 100 , min = 0){
     return Math.floor(Math.random() * (max + 1 - min) + min);
}

let num = +prompt('Nechta misol yechmoqchisiz?')

while (isNaN(num)) {
  num = +prompt('Qaytadan kiriting siz son kiritmadiz');
}
let max = +prompt('Maksimal sonni kiriting')

while (isNaN(max)) {
  max = +prompt('Qaytadan kiriting siz son kiritmadiz');
}
let min = +prompt('Minimal sonni kiriting')

while (isNaN(min) || min > max) {
  min = +prompt('Qaytadan kiriting siz son kiritmadiz yoki siz kiritgan son ' + max + ' dan katta bo`lishi mumkin emas');
}


for( let i = 1; i <= num;i++){
  let num1 = random(max,min);
  let num2 = random(max,min);
  let answer = +prompt('Misol №' + i + ':' + num1 + " + " + num2 + ' = ?');
  if(answer == num1 + num2){
    console.log('Misol №' + i + ':'   + num1 + " + " + num2 + " = " + answer + ' Sizning javobingiz to`g`ri');
  }else{
    console.log('Misol №' + i + ':'  + num1 + " + " + num2 + ' = ' + (num1 + num2) + ' Sizning javobingiz xato ' + answer );
  }
}
