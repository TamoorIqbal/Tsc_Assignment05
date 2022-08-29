// 1. Write a ts program to find maximum between two numbers.
var maximumFindMax2 = function () {
    var number1 = prompt("Please Enter 1st Number");
    var number2 = prompt("Please Enter 2nd Number");
    console.log("number1", number1);
    console.log("number2", typeof number2);
    if (number1 && number2) {
        var num1 = parseInt(number1);
        var num2 = parseInt(number2);
        if (num1 > num2) {
            alert(num2 + " is maximum");
        }
        if (num1 < num2) {
            alert(num2 + " is maximum");
        }
        else {
            alert("Boths Numbers Are Equal");
        }
    }
};
// 2. Write a ts program to find maximum between three numbers.
var maximumFindMax3 = function () {
    var number1 = prompt("Please Enter 1st Number");
    var number2 = prompt("Please Enter 2nd Number");
    var number3 = prompt("Please Enter 2nd Number");
    if (number1 && number2 && number3) {
        var num1 = parseInt(number1);
        var num2 = parseInt(number2);
        var num3 = parseInt(number3);
        if (num1 > num2 && num1 > num3) {
            alert("Number one ".concat(num1, " Is Maximum"));
        }
        else if (num2 > num1 && num2 > num3) {
            alert("Number Two ".concat(num2, " Is Maximum"));
        }
        else if (num3 > num1 && num3 > num2) {
            alert("Number Three ".concat(num3, " Is Maximum"));
        }
        else if (num1 == num2 && num2 == num3) {
            alert("All Numbers are Equal ".concat(num1, " ").concat(num2, " ").concat(num3));
        }
        else if (num1 == num2 && num1 > num3) {
            alert("Number one ".concat(num1, " is Equal to Number two ").concat(num2, " and Number Three is Minimum ").concat(num3));
        }
        else if (num1 < num2 && num2 == num3) {
            alert("Number one  ".concat(num1, " is Minimum Number , Number Two ").concat(num2, " and Number Three ").concat(num3, " are Equals "));
        }
        else {
            alert("Please Enter Correct Number");
        }
    }
};
// 3. Write a ts program to check whether a number is negative, positive or zero.
var findNumberState = function () {
    var number1 = prompt("Please Enter Number");
    console.log("number1", number1);
    if (number1) {
        var num1 = parseInt(number1);
        if (num1 === 0) {
            alert("Number is Zer0");
        }
        else if (num1 < 0) {
            alert("Number is Negative");
        }
        else {
            alert("Number is Positive");
        }
    }
};
// 4. Write a ts program to check whether a number is divisible by 5 and 11 or not.
var Divisible = function () {
    var number1 = prompt("Please Enter Number");
    console.log("number1", number1);
    if (number1) {
        var num1 = parseInt(number1);
        if ((num1 % 5 == 0) && (num1 % 11 == 0)) {
            alert("Yes..divisible by 5 and 11");
        }
        else {
            alert("No..divisible by 5 and 11");
        }
    }
};
// 5. Write a ts program to check whether a number is even or odd.
var evenodd = function () {
    var number1 = prompt("Please Enter Number");
    if (number1) {
        var num1 = parseInt(number1);
        if (num1 % 2 === 0) {
            alert(num1 + " is Even Number");
        }
        else {
            alert(num1 + " is Odd Number");
        }
    }
};
// 6. Write a ts program to check whether a year is leap year or not.
var year = function () {
    var number1 = prompt("Please Enter Year");
    if (number1) {
        var year_1 = parseInt(number1);
        if (year_1 % 4 === 0) {
            alert(year_1 + " Year is leap");
        }
        else {
            alert(year_1 + " Year is not leap");
        }
    }
};
// 7. Write a ts program to check whether a character is alphabet or not.
var alphabet = function () {
    var character = prompt("Please Enter Character");
    if ((character === null || character === void 0 ? void 0 : character.length) == 1) {
        var chAr = character.charCodeAt(0);
        console.log(chAr);
        if (chAr >= 65 && chAr <= 90 || chAr >= 97 && chAr <= 122) {
            alert(character + " is alphabet character");
        }
        else {
            alert(character + " is not alphabet character");
        }
    }
    else {
        alert("Please Enter Single Charcter");
    }
};
// 8. Write a ts program to input any alphabet and check whether it is vowel or consonant.
var vowel = function () {
    var character = prompt("Please Enter Character");
    var vowel = ["a", "e", "i", "o", "u"];
    if (character) {
        var chAr = character.toLocaleLowerCase();
        for (var i = 0; i < vowel.length; i++) {
            if (vowel[i] == chAr) {
                alert(chAr + " is Vowel character");
                return;
            }
            else {
                alert("<b>" + chAr + "</b>" + " is Not Vowel character");
                return;
            }
        }
    }
};
// 9. Write a ts program to input any character and check whether it is alphabet, digit or special character.
var alphabetChar = function () {
    var character = prompt("Please Enter Character");
    if (character) {
        var chAr = character.charCodeAt(0);
        console.log(chAr);
        if (chAr >= 65 && chAr <= 90 || chAr >= 97 && chAr <= 122) {
            alert(character + " is Alphabet character");
        }
        else if (chAr >= 48 && chAr <= 57) {
            alert(character + " is Digit character");
        }
        else {
            alert(character + " is special character");
        }
    }
};
// 10. Write a ts program to check whether a character is uppercase or lowercase alphabet.
var upperLower = function () {
    var character = prompt("Please Enter Character");
    if (character) {
        var chAr = character.charCodeAt(0);
        console.log(chAr);
        if (chAr >= 65 && chAr <= 90) {
            alert(character + " is Uppercase character");
        }
        else if (chAr >= 97 && chAr <= 122) {
            alert(character + " is Lowercase character");
        }
        else {
            alert(character + " is not alphabet character");
        }
    }
};
// 11. Write a ts program to input week number and print week day.
var weekNumber = function () {
    var number1 = prompt("Please Enter Number");
    if (number1) {
        var num1 = parseInt(number1);
        switch (num1) {
            case 1:
                alert("Monday");
                break;
            case 2:
                alert("Tuesday");
                break;
            case 3:
                alert("Wednesday");
                break;
            case 4:
                alert("Thursday");
                break;
            case 5:
                alert("Friday");
                break;
            case 6:
                alert("Saturday");
                break;
            case 7:
                alert("Sunday");
                break;
            default:
                alert("Invalid Input! Please enter week number between 1-7");
                break;
        }
    }
};
// 12. Write a ts program to input month number and print number of days in that month.
var monthNumber = function () {
    var number1 = prompt("Please Enter Number");
    if (number1) {
        var num1 = parseInt(number1);
        switch (num1) {
            case 1:
                alert("31 days");
                break;
            case 2:
                alert("28 or 29 days");
                break;
            case 3:
                alert("31 days");
                break;
            case 4:
                alert("30 days");
                break;
            case 5:
                alert("31 days");
                break;
            case 6:
                alert("30 days");
                break;
            case 7:
                alert("31 days");
                break;
            case 8:
                alert("31 days");
                break;
            case 9:
                alert("30 days");
                break;
            case 10:
                alert("31 days");
                break;
            case 11:
                alert("30 days");
                break;
            case 12:
                alert("31 days");
                break;
            default:
                alert("Invalid Input! Please enter month number between 1-12");
                break;
        }
    }
};
// 13. Write a ts program to count total number of notes in given amount.
var note = function () {
    var amount = prompt("Please Enter Amount");
    var notes = [5000, 1000, 500, 100, 50, 20, 10, 5, 2, 1];
    if (amount) {
        var amount1 = parseInt(amount);
        for (var i = 0; i < notes.length; i++) {
            {
                alert(notes[i] + " Note is : " + Math.floor(amount1 / notes[i]));
                amount1 = amount1 % notes[i];
            }
        }
    }
};
// 14. Write a ts program to input angles of a triangle and check whether triangle is valid or not.
var angles = function () {
    var angle1 = prompt("Please Enter 1st Angle");
    var angle2 = prompt("Please Enter 2nd Angle");
    var angle3 = prompt("Please Enter 2nd Angle");
    if (angle1 && angle2 && angle3) {
        var num1 = parseInt(angle1);
        var num2 = parseInt(angle2);
        var num3 = parseInt(angle3);
        var allSides = num1 + num2 + num3;
        if (allSides == 180 && num1 > 0 && num2 > 0 && num3 > 0) {
            alert("Triangle is valid");
        }
        else {
            alert("Triangle is not valid");
        }
    }
};
// 15. Write a ts program to input all sides of a triangle and check whether triangle is valid or not.
var allSideAngle = function () {
    var angle1 = prompt("Please Enter 1st Angle");
    var angle2 = prompt("Please Enter 2nd Angle");
    var angle3 = prompt("Please Enter 2nd Angle");
    if (angle1 && angle2 && angle3) {
        var num1 = parseInt(angle1);
        var num2 = parseInt(angle2);
        var num3 = parseInt(angle3);
        if ((num1 + num2) > num3 || (num1 + num3) > num2 || (num2 + num3) > num1) {
            alert("Triangle is valid");
        }
        else {
            alert("Triangle is not valid");
        }
    }
};
// 16. Write a ts program to check whether the triangle is equilateral, isosceles or scalene triangle.
var scalene = function () {
    var angle1 = prompt("Please Enter 1st Angle");
    var angle2 = prompt("Please Enter 2nd Angle");
    var angle3 = prompt("Please Enter 2nd Angle");
    if (angle1 && angle2 && angle3) {
        var num1 = parseInt(angle1);
        var num2 = parseInt(angle2);
        var num3 = parseInt(angle3);
        if ((num1 + num2) > num3 && (num1 + num3) > num2 && (num2 + num3) > num1) {
            alert("Triangle is valid");
        }
        else {
            alert("Triangle is not valid");
        }
        if (num1 == num2 && num2 == num3) {
            alert("equilateral Triangle");
        }
        else if (num1 == num2 || num2 == num3 || num3 == num1) {
            alert("isosceles Triangle");
        }
        else {
            alert("scalene Triangle");
        }
    }
};
// 17. Write a ts program to find all roots of a quadratic equation.
var QuadRoot = function () {
    var number1 = prompt("Please Enter 1st Number");
    var number2 = prompt("Please Enter 2nd Number");
    var number3 = prompt("Please Enter 2nd Number");
    if (number1 && number2 && number3) {
        var a = parseInt(number1);
        var b = parseInt(number2);
        var c = parseInt(number3);
        var x1 = void 0;
        var x2 = void 0;
        var realPart = void 0;
        var imaginaryPart = void 0;
        var discriminant = b * b - 4 * a * c;
        if (discriminant > 0) {
            x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            alert("Roots are real and different.  x1 =  ".concat(x1, " and  x2 = ").concat(x2));
        }
        else if (discriminant == 0) {
            x1 = -b / (2 * a);
            alert("Roots are real and same. x1 = x2 = ".concat(x1));
        }
        else {
            realPart = -b / (2 * a);
            imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
            alert("Roots are complex and different.   \n          x1 =   ".concat(realPart, "  +  ").concat(imaginaryPart, "   \n          x2 =   ").concat(realPart, "  - ").concat(imaginaryPart));
        }
    }
};
// 18. Write a ts program to calculate profit or loss.
var calculate = function () {
    var cost = prompt("Please Enter Cost");
    var sell = prompt("Please Enter Sell");
    if (cost && sell) {
        var cost1 = parseInt(cost);
        var sell1 = parseInt(sell);
        if (sell1 > cost1) {
            alert("Profit =  ".concat(sell1 - cost1));
        }
        else if (cost1 > sell1) {
            alert("Loss = ".concat(sell1 - cost1));
        }
        else {
            alert("No Profit No Loss.");
        }
    }
};
// 19. Write a ts program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
var marks = function () {
    var number1 = prompt("Please Enter Physics Marks");
    var number2 = prompt("Please Enter Chemistry Marks");
    var number3 = prompt("Please Enter Bio Marks");
    var number4 = prompt("Please Enter Math Marks");
    var number5 = prompt("Please Enter Computer Marks");
    if (number1 && number2 && number3 && number4 && number5) {
        var physics = parseInt(number1);
        var chemistry = parseInt(number2);
        var bio = parseInt(number3);
        var math = parseInt(number4);
        var computer = parseInt(number5);
        var total = physics + chemistry + bio + math + computer;
        var percent = total / 5;
        if (percent >= 90) {
            alert("Grade=A");
        }
        else if (percent >= 80) {
            alert("Grade=B");
        }
        else if (percent >= 70) {
            alert("Grade=C");
        }
        else if (percent >= 60) {
            alert("Grade=D");
        }
        else if (percent >= 40) {
            alert("Grade=E");
        }
        else {
            alert("Gread F");
        }
    }
};
// 20. Write a ts program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
var grossSalary = function () {
    var salary1 = prompt("Please Enter Salary");
    var DA;
    var HRA;
    var gross;
    if (salary1) {
        var salary = parseInt(salary1);
        if (salary <= 10000) {
            DA = salary * 20 / 100;
            HRA = salary * 80 / 100;
            gross = salary + DA + HRA;
            alert("the gross salary is Rs. " + gross);
        }
        if (salary <= 20000) {
            DA = salary * 25 / 100;
            HRA = salary * 90 / 100;
            gross = salary + DA + HRA;
            alert("the gross salary is Rs. " + gross);
        }
        else if (salary > 20000) {
            DA = salary * 30 / 100;
            HRA = salary * 95 / 100;
            gross = salary + DA + HRA;
            alert("the gross salary is Rs. " + gross);
        }
        else {
            alert("you have no salary");
        }
    }
};
// 21. Write a ts program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill
var bill = function () {
    var unit1 = prompt("Please Enter Units");
    if (unit1) {
        var unit = parseInt(unit1);
        var amount = void 0;
        var charge = void 0;
        var total = void 0;
        if (unit <= 50) {
            amount = unit * 0.50;
        }
        else if (unit <= 150) {
            amount = 25 + ((unit - 50) * 0.75);
        }
        else if (unit <= 250) {
            amount = 100 + ((unit - 150) * 1.20);
        }
        else {
            amount = 220 + ((unit - 250) * 1.50);
        }
        charge = amount * 0.20;
        total = amount + charge;
        alert("Electricity Bill = Rs. ".concat(total));
    }
};
