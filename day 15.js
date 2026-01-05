console.log("=== MY CALCULATOR===")
console.log("")
//calculactor function
function calculator(num1, num2 , operation){
  if(operation === "add"){
    return num1 + num2
  }else if (operation === "subtract"){
    return num1- num2
  }else if (operation === "multiply"){
    return num1*num2
  }else if (operation === "divide"){
    if (num2 === 0){
      return "Error : cannot divide by zero"
    }
    return num1/num2
  }else{
    return "Error : invaild operation"
  }
}
// Test the calculactor
console.log("Testing calculator :")
console.log("")
//Addtion test 
console.log("10 + 5 = " + calculator(10,5,"add"))
console.log("100 + 50 = " + calculator(100,50,"add"))
//subtraction Testing
console.log("")
console.log("10 - 5 = " + calculator(10,5, "subtract"))
console.log("50 - 30 = " + calculator(50,30, "subtract"))
//multiplication test 
console.log("")
console.log("10 * 5 = " + calculator( 10,5, "multiply"))
console.log("12 * 4 = " + calculator(12,4,"multiply"))
//Division test
console.log("")
console.log("10/5 = " + calculator(10,5, "divide"))
console.log("100/4 = " + calculator(100,4,"divide"))
//Error handling
console.log("")
console.log("10/0 = " + calculator(10,0,"divide"))
console.log("10 + 5 wrong  = " + calculator(10,5,"divide"))
console.log("")
console.log("=== CALCULATOR WORKS!===")
console.log("")
console.log("=== ADVANCED FEATURES ===")
//calculate my monthly savings
let income = 45000
let expenses = 32000
let savings = calculator(income,expenses,"subtract")
console.log("my monthly savings : ₦" + savings)
//calculate how mucj i'll save in 6 months
let sixMonthsSavings = calculator(savings, 6, ("multiply"))
console.log("6 months savings: ₦ " + sixMonthsSavings)
//calculate my daily coding time needed
let hoursperWeek = 30 // target 
let daysPerWeek = 7 // coding days 
let hoursPerDay = calculator(hoursperWeek, daysPerWeek, "divide")
console.log("Daily coding hour need :" + hoursPerDay)