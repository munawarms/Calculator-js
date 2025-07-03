userName = prompt("Enter Your Name")
console.log(userName)

userAge = prompt("Enter Your age")
console.log(userAge)

console.log(typeof userAge)

userValue = prompt("Enter Your starting Value")
console.log(userValue)

converteduserValue=Number(userValue)
console.log(typeof converteduserValue)
 
for (let i = converteduserValue; i <=100; i++) {
    console.log(i)
    
}
userOption = prompt("Enter an option:1,2,3,4,5,")
userOption = Number(userOption)

while (userOption>5) {
    userOption = prompt("Incorect option:1,2,3,4,5,")
userOption = Number(userOption)
}

userCity = prompt("Enter an option:lahore")

while (userCity!="lahore") {
    userCity = prompt("Enter an corect city:")
}

//arays

users=["Ali","Munawar","Usman","Minaam","Rajab"];
console.log(users[0])
console.log(users[1])
console.log(users[2])
console.log(users[3])
console.log(users[4])

//calculator

 num1 = parseFloat(prompt("Enter first number:"));
 operator = prompt("Enter operator (+, -, *, /):");
 num2 = parseFloat(prompt("Enter second number:"));

if (operator == "+") {
  result = num1 + num2;
} else if (operator == "-") {
  result = num1 - num2;
} else if (operator == "*") {
  result = num1 * num2;
} else if (operator == "/") {
  if (num2 != 0) {
    result = num1 / num2;
  } else {
    result = "Error: Division by zero";
  }
} else {
  result = "Invalid operator!";
}

alert("Result: " + result);

