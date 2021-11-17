let emptyArr = [];
 console.log(emptyArr);

let courseDetail = {
    courseName : "Web Development Course" ,
    totalStudents : 10 ,
    companyName : "North Aims Technologies" ,
    classTiming : "4 pm" ,
    totalWeeks : 13 ,
    topics : ["HTML" , "CSS" , "JavaScript"] ,
}

emptyArr.unshift(courseDetail)
console.log(emptyArr)

let courseInform = `Our company name is ${emptyArr[0].companyName} 
there are ${emptyArr[0].totalStudents} students We studying a ${emptyArr[0].courseName}
 and timiming of our class is ${emptyArr[0].classTiming} .this course complete in ${emptyArr[0].totalWeeks} weeks
  in ${emptyArr[0].companyName} there are some topic such as ${emptyArr[0].topics} `

console.log(courseInform)

  let companyDetails = `company name is ${emptyArr[0].companyName} our company offer a ${emptyArr[0].courseName}. In ${emptyArr[0].courseName} there are some topic ${emptyArr[0].topics}  `
console.log(companyDetails)

  let companyName = prompt("Search about us").toLowerCase();
  
  if (companyName === emptyArr[0].companyName.toLowerCase()){
    alert(companyDetails)
  } 
  else if (companyName === emptyArr[0].courseName.toLowerCase()){
    alert(courseInform)
    
  }
  else {
    alert("No data in database")
  }


// let sign = " + , - , / , *";
// let num1 = parseInt(prompt("Enter your first number"))
//  let operators = prompt("Enter an mathematical operators") ;
//  let num2 = parseInt(prompt("Enter your second number")) ;
//    let result;

//  if(operators === "+"){
//      result = num1 + num2 ;
//  } else if(operators === "-"){
//      result = num1 - num2 ;
//  }
//  else if(operators === "*"){
//     result = num1 * num2 ;
// }
// else if(operators === "/"){
//     result = num1 / num2 ;
// } else{
//     result = "invalid input"
// }

// alert(result)
// console.log(result) ;