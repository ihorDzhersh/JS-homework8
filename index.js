
//***********************Task1 **************************** */

// function upperCase(value){
    
//     let rExp = /^[A-Z]/;
//     if(rExp.test(value)!==true){
//         console.log("String's not starts with uppercase character")
//     }else(
//         console.log("String's starts with uppercase character")
//     )
// }
// upperCase('regexp');
// upperCase('Regexp');

//***********************Task2 **************************** */

// function checkEmail(params) {

//     let regExp1 = /[@]/;
//     let regExp2 = /[.]/;

//     if(regExp1.test(params)&&regExp2.test(params)){
//         console.log("this is email")
//     } else{
//         console.log("this is not email")
//     }
// }


// checkEmail("Qmail2@gmail.com")
// checkEmail("Qmail2gmail.com")
// checkEmail("Qmail2@gmailcom")

//***********************Task3 **************************** */

// let str = "cdbBdbsbz";
// let regExp = /d(b+)(d)/gi
// console.log(regExp.exec(str));

//***********************Task4 **************************** */

// let str = "Java Script"
// console.log(str.replace(/(\w+) (\w+)/i, '$2, $1'));


//***********************Task5 **************************** */

// function checkCardNumber(number){

//     let regExp = /((\d{4}-){3})\d{4}|\d{16}/;
//     console.log(regExp.test(number))
// }

// checkCardNumber("9999-9999-9999-9999");

//***********************Task6 **************************** */

// function checkEmail(email){

//     let regExp = /^[A-z0-9_-]+@[A-z0-9_-]+\.[a-z]{2,3}$/g;
//     if(regExp.test(email) === true){
//         return "Email is correct!"
//     }else if(regExp.test(email) === false){
//         return "Email is not correct!"
//     }
// }

// console.log(checkEmail("Eexample-_@Ggmail-_.com"));

//***********************Task7 **************************** */

// function checkLogin(login){

//     let regExp1 = /^[A-Za-z][A-Za-z0-9]{2,10}[^!#$&*@;:]/g;
//     let regExp2 = /([0-9][.][0-9]+)|[0-9]+/gm
//     console.log(regExp1.test(login))
//     console.log(login.match(regExp2))

// }

// checkLogin('ee1.1ret3');
// checkLogin('ee1*1ret3');