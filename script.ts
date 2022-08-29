// 1. Write a ts program to find maximum between two numbers.
var maximumFindMax2: () => void = () => {

    let number1: string | null = prompt("Please Enter 1st Number");
    let number2: string | null = prompt("Please Enter 2nd Number");
    console.log("number1", number1)
    console.log("number2", typeof number2)
    if (number1 && number2) {

        let num1: number = parseInt(number1)
        let num2: number = parseInt(number2)

        if (num1 > num2) {
            alert(num2 + " is maximum")
        }
        if (num1 < num2) {
            alert(num2 + " is maximum")
        } else {
            alert("Boths Numbers Are Equal")
        }

    }

}
// 2. Write a ts program to find maximum between three numbers.
var maximumFindMax3: () => void = () => {

    let number1: string | null = prompt("Please Enter 1st Number");
    let number2: string | null = prompt("Please Enter 2nd Number");
    let number3: string | null = prompt("Please Enter 2nd Number");

    if (number1 && number2 && number3) {

        let num1: number = parseInt(number1)
        let num2: number = parseInt(number2)
        let num3: number = parseInt(number3)

        if (num1 > num2 && num1 > num3) {
            alert(`Number one ${num1} Is Maximum`)
        }
        else if (num2 > num1 && num2 > num3) {
            alert(`Number Two ${num2} Is Maximum`)
        }
        else if (num3 > num1 && num3 > num2) {
            alert(`Number Three ${num3} Is Maximum`)
        }
        else if (num1 == num2 && num2 == num3) {
            alert(`All Numbers are Equal ${num1} ${num2} ${num3}`)
        }
        else if (num1 == num2 && num1 > num3) {
            alert(`Number one ${num1} is Equal to Number two ${num2} and Number Three is Minimum ${num3}`)
        }
        else if (num1 < num2 && num2 == num3) {
            alert(`Number one  ${num1} is Minimum Number , Number Two ${num2} and Number Three ${num3} are Equals `)
        }
        else {
            alert("Please Enter Correct Number")
        }
    }
}
// 3. Write a ts program to check whether a number is negative, positive or zero.
var findNumberState: () => void = () => {

    let number1: string | null = prompt("Please Enter Number");
    console.log("number1", number1)
    if (number1) {

        let num1: number = parseInt(number1)

        if (num1 === 0) {
            alert("Number is Zer0")
        }
        else if (num1 < 0) {
            alert("Number is Negative")
        }
        else {
            alert("Number is Positive")

        }

    }

}
// 4. Write a ts program to check whether a number is divisible by 5 and 11 or not.
var Divisible: () => void = () => {

    let number1: string | null = prompt("Please Enter Number");
    console.log("number1", number1)
    if (number1) {
        let num1: number = parseInt(number1)
        if ((num1 % 5 == 0) && (num1 % 11 == 0)) {
            alert("Yes..divisible by 5 and 11")
        }
        else {
            alert("No..divisible by 5 and 11")
        }
    }

}
// 5. Write a ts program to check whether a number is even or odd.
var evenodd: () => void = () => {

    let number1: string | null = prompt("Please Enter Number");
    if (number1) {
        let num1: number = parseInt(number1)
        if (num1 % 2 === 0) {
            alert(num1 + " is Even Number")
        }
        else {
            alert(num1 + " is Odd Number")
        }
    }
}
// 6. Write a ts program to check whether a year is leap year or not.
var year: () => void = () => {

    let number1: string | null = prompt("Please Enter Year");
    if (number1) {
        let year: number = parseInt(number1)
        if (year % 4 === 0) {
            alert(year + " Year is leap")
        }
        else {
            alert(year + " Year is not leap")
        }
    }
}
// 7. Write a ts program to check whether a character is alphabet or not.
var alphabet: () => void = () => {

    let character: string | null = prompt("Please Enter Character");
    if (character?.length == 1) {
        let chAr: number = character.charCodeAt(0)
        console.log(chAr);
        if (chAr >= 65 && chAr <= 90 || chAr >= 97 && chAr <= 122) {
            alert(character + " is alphabet character")
        }
        else {
            alert(character + " is not alphabet character")
        }
    } else {
        alert("Please Enter Single Charcter")
    }

}

// 8. Write a ts program to input any alphabet and check whether it is vowel or consonant.
var vowel: () => void = () => {

    let character: string | null = prompt("Please Enter Character");
    let vowel: string[] = ["a", "e", "i", "o", "u"]
    if (character) {
        let chAr: string = character.toLocaleLowerCase()
        for (let i = 0; i < vowel.length; i++) {
            if (vowel[i] == chAr) {
                alert(chAr + " is Vowel character")
                return
            }
            else {
                alert("<b>" + chAr + "</b>" + " is Not Vowel character")
                return
            }
        }
    }

}
// 9. Write a ts program to input any character and check whether it is alphabet, digit or special character.
var alphabetChar: () => void = () => {

    let character: string | null = prompt("Please Enter Character");
    if (character) {
        let chAr: number = character.charCodeAt(0)
        console.log(chAr);
        if (chAr >= 65 && chAr <= 90 || chAr >= 97 && chAr <= 122) {
            alert(character + " is Alphabet character")
        }
        else if (chAr >= 48 && chAr <= 57) {
            alert(character + " is Digit character")
        }
        else {
            alert(character + " is special character")
        }
    }

}

// 10. Write a ts program to check whether a character is uppercase or lowercase alphabet.
var upperLower: () => void = () => {

    let character: string | null = prompt("Please Enter Character");
    if (character) {
        let chAr: number = character.charCodeAt(0)
        console.log(chAr);
        if (chAr >= 65 && chAr <= 90) {
            alert(character + " is Uppercase character")
        }
        else if (chAr >= 97 && chAr <= 122) {
            alert(character + " is Lowercase character")
        }
        else {
            alert(character + " is not alphabet character")
        }
    }

}
// 11. Write a ts program to input week number and print week day.
var weekNumber: () => void = () => {

    let number1: string | null = prompt("Please Enter Number");
    if (number1) {
        let num1: number = parseInt(number1)
        switch (num1) {
            case 1:
                alert("Monday")
                break;
            case 2:
                alert("Tuesday")
                break;
            case 3:
                alert("Wednesday")
                break;
            case 4:
                alert("Thursday")
                break;
            case 5:
                alert("Friday")
                break;
            case 6:
                alert("Saturday")
                break;
            case 7:
                alert("Sunday")
                break;
            default:
                alert("Invalid Input! Please enter week number between 1-7");
                break;
        }
    }
}

// 12. Write a ts program to input month number and print number of days in that month.

var monthNumber: () => void = () => {

    let number1: string | null = prompt("Please Enter Number");
    if (number1) {
        let num1: number = parseInt(number1)
        switch (num1) {
            case 1:
                alert("31 days")
                break;
            case 2:
                alert("28 or 29 days")
                break;
            case 3:
                alert("31 days")
                break;
            case 4:
                alert("30 days")
                break;
            case 5:
                alert("31 days")
                break;
            case 6:
                alert("30 days")
                break;
            case 7:
                alert("31 days")
                break;
            case 8:
                alert("31 days")
                break;
            case 9:
                alert("30 days")
                break;
            case 10:
                alert("31 days")
                break;
            case 11:
                alert("30 days")
                break;
            case 12:
                alert("31 days")
                break;
            default:
                alert("Invalid Input! Please enter month number between 1-12");
                break;
        }
    }
}

// 13. Write a ts program to count total number of notes in given amount.
var note: () => void = () => {

    let amount: string | null = prompt("Please Enter Amount");
    let notes: number[] = [5000, 1000, 500, 100, 50, 20, 10, 5, 2, 1]
    if (amount) {
        let amount1: number = parseInt(amount);

        for (let i = 0; i < notes.length; i++) {
            {

                alert(notes[i] + " Note is : " + Math.floor(amount1 / notes[i]));
                amount1 = amount1 % notes[i];

            }
        }
    }


}
// 14. Write a ts program to input angles of a triangle and check whether triangle is valid or not.
var angles: () => void = () => {

    let angle1: string | null = prompt("Please Enter 1st Angle");
    let angle2: string | null = prompt("Please Enter 2nd Angle");
    let angle3: string | null = prompt("Please Enter 2nd Angle");
    if (angle1 && angle2 && angle3) {
        let num1: number = parseInt(angle1)
        let num2: number = parseInt(angle2)
        let num3: number = parseInt(angle3)
        let allSides: number = num1 + num2 + num3
        if (allSides == 180 && num1 > 0 && num2 > 0 && num3 > 0) {
            alert("Triangle is valid")
        }
        else {
            alert("Triangle is not valid")
        }
    }

}
// 15. Write a ts program to input all sides of a triangle and check whether triangle is valid or not.
var allSideAngle: () => void = () => {

    let angle1: string | null = prompt("Please Enter 1st Angle");
    let angle2: string | null = prompt("Please Enter 2nd Angle");
    let angle3: string | null = prompt("Please Enter 2nd Angle");
    if (angle1 && angle2 && angle3) {
        let num1: number = parseInt(angle1)
        let num2: number = parseInt(angle2)
        let num3: number = parseInt(angle3)
        if ((num1 + num2) > num3 || (num1 + num3) > num2 || (num2 + num3) > num1) {
            alert("Triangle is valid")
        }
        else {
            alert("Triangle is not valid")
        }
    }
}
// 16. Write a ts program to check whether the triangle is equilateral, isosceles or scalene triangle.
var scalene: () => void = () => {

    let angle1: string | null = prompt("Please Enter 1st Angle");
    let angle2: string | null = prompt("Please Enter 2nd Angle");
    let angle3: string | null = prompt("Please Enter 2nd Angle");
    if (angle1 && angle2 && angle3) {
        let num1: number = parseInt(angle1)
        let num2: number = parseInt(angle2)
        let num3: number = parseInt(angle3)
        if ((num1 + num2) > num3 && (num1 + num3) > num2 && (num2 + num3) > num1) {
            alert("Triangle is valid")
        }
        else {
            alert("Triangle is not valid")
        }
        if (num1 == num2 && num2 == num3) {
            alert("equilateral Triangle");
        } else if (num1 == num2 || num2 == num3 || num3 == num1) {
            alert("isosceles Triangle")
        } else {
            alert("scalene Triangle");
        }
    }
}
// 17. Write a ts program to find all roots of a quadratic equation.
var QuadRoot: () => void = () => {

    let number1: string | null = prompt("Please Enter 1st Number");
    let number2: string | null = prompt("Please Enter 2nd Number");
    let number3: string | null = prompt("Please Enter 2nd Number");
    if (number1 && number2 && number3) {
        let a: number = parseInt(number1)
        let b: number = parseInt(number2)
        let c: number = parseInt(number3)
        let x1: number;
        let x2: number;
        let realPart: number;
        let imaginaryPart: number;
        let discriminant: number = b * b - 4 * a * c;
        if (discriminant > 0) {
            x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            alert(`Roots are real and different.  x1 =  ${x1} and  x2 = ${x2}`)
        }
        else if (discriminant == 0) {
            x1 = -b / (2 * a);
            alert(`Roots are real and same. x1 = x2 = ${x1}`);
        }
        else {
            realPart = -b / (2 * a);
            imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
            alert(`Roots are complex and different.   
          x1 =   ${realPart}  +  ${imaginaryPart}   
          x2 =   ${realPart}  - ${imaginaryPart}`);
        }
    }
}
// 18. Write a ts program to calculate profit or loss.
var calculate: () => void = () => {

    let cost: string | null = prompt("Please Enter Cost");
    let sell: string | null = prompt("Please Enter Sell");
    if (cost && sell) {
        let cost1: number = parseInt(cost)
        let sell1: number = parseInt(sell)

        if (sell1 > cost1) {
            alert(`Profit =  ${sell1 - cost1}`);
        }
        else if (cost1 > sell1) {
            alert(`Loss = ${sell1 - cost1}`);
        }
        else {
            alert("No Profit No Loss.");
        }
    }

}
// 19. Write a ts program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
var marks: () => void = () => {

    let number1: string | null = prompt("Please Enter Physics Marks");
    let number2: string | null = prompt("Please Enter Chemistry Marks");
    let number3: string | null = prompt("Please Enter Bio Marks");
    let number4: string | null = prompt("Please Enter Math Marks");
    let number5: string | null = prompt("Please Enter Computer Marks");
    if (number1 && number2 && number3 && number4 && number5) {
        let physics: number = parseInt(number1)
        let chemistry: number = parseInt(number2)
        let bio: number = parseInt(number3)
        let math: number = parseInt(number4)
        let computer: number = parseInt(number5)
        let total: number = physics + chemistry + bio + math + computer;
        let percent: number = total / 5;
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

}
// 20. Write a ts program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
var grossSalary: () => void = () => {

    let salary1: string | null = prompt("Please Enter Salary");
    let DA: number;
    let HRA: number;
    let gross: number;
    if (salary1) {
        let salary: number = parseInt(salary1)
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

}
// 21. Write a ts program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill
var bill: () => void = () => {

    let unit1: string | null = prompt("Please Enter Units");
    if (unit1) {
        let unit: number = parseInt(unit1)
        let amount: number;
        let charge: number;
        let total: number;
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
        alert(`Electricity Bill = Rs. ${total}`);
    }
}