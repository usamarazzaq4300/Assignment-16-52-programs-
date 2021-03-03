// 5- Write a js program to input angles of a triangle and check whether triangle is valid or not.
// var angle1 = prompt("Please enter angle of first side:")
// var angle2 = prompt("Please enter angle of second side:")
// var angle3 = prompt("Please enter angle of third side:")
// angle1 = parseInt(angle1)
// angle2 = parseInt(angle2)
// angle3 = parseInt(angle3)
// if( angle1 + angle2 + angle3 == 180)
// {
//     alert("The triangle is valid.")
// }
// else
// {
//     alert("The tringle is not valid.")
// }

// 6-. Write a js program to input all sides of a triangle and check whether triangle is valid or not.
// var side1 = prompt("Please enter first side:")
// var side2 = prompt("Please enter second side:")
// var side3 = prompt("Please enter third side:")
// side1 = parseInt(side1)
// side2 = parseInt(side2)
// side3 = parseInt(side3)
// if(side1+side2 > side3 && side2+side3 > side1 && side1+side3 > side2)
// {
//     alert("The Triangle is valid.")
// }
// else
// {
//     alert("The triangle is not valid.")
// }

// 7- Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.
// var side1 = prompt("Please enter first side:")
// var side2 = prompt("Please enter second side:")
// var side3 = prompt("Please enter third side:")
// side1 = parseInt(side1)
// side2 = parseInt(side2)
// side3 = parseInt(side3)
// if(side1 == side2 && side1 == side3 && side2 == side3 )
// {
//     alert("Equilateral")
// }
// else if ((side1 == side2) || (side1 == side3) || (side3 == side2))
// {
//     if(side1 !=side3 || side2 != side3)
//     {
//         alert("isoceles")
//     }
// }
// else
// {
//     alert("scalene")
// }

// 8- Write a js program to find all roots of a quadratic equation.
// var a = prompt("Please enter the value of a:")
// var b = prompt("Please enter the value of b:")
// var c = prompt("Please enter the value of c:")
// a = parseInt(a)
// b = parseInt(b)
// c = parseInt(c)
// var b= b*b;
// if((b - 4*a*c) == 0)
// {
//     alert("roots are real and equal.")
// } 
// else if((b - 4*a*c) > 0)
// {
//     alert("roots are real and different.")
// }
// else if((b - 4*a*c) < 0)
// {
//     alert("roots are complex")
// }

// 12- Write a js program to find highest frequency character in a string.
// var str = "javassscript"
// var counter = 0 ;
// var highFrequencyChar = 0 ;
// var char , maxiChar ;
// for (var i = 0;i<=str.length;i++)
// {
//     char = str.slice(i,i+1)
//     for(var j = 0;j<=str.length; j++)
//     {
//         if(char == str.slice(j,j+1))
//         {
//             counter = counter + 1 ;
//         }
//     }
//     if(counter>highFrequencyChar)
//     {
//         highFrequencyChar = counter
//         maxiChar = char ;
//     }
//     counter = 0;
// }
// document.write("The character which appears most is "+'"'+maxiChar+'"')

// 13- Write a js program to find lowest frequency character in a string.
// var str = "abcacc"
// var counter = 0;
// var lowFrequencyChar = str.length ;
// var char , miniChar ;
// for( var i = 0; i<=str.length; i++)
// {
//     char = str.slice(i,i+1)
//     for(j = 0; j<=str.length; j++)
//     {
//         if(char == str.slice(j,j+1))
//         {
//             counter = counter + 1;
//         }
//     }
//     if(counter<lowFrequencyChar)
//     {
//         miniChar = char ;
//         lowFrequencyChar = counter ;
//     }
    
//     counter = 0 ;
// }
// document.write("The character which appears least is "+'"'+miniChar+'"')

// 43- Write a js program to find sum of all natural numbers between 1 to n.
// var n = prompt("Please Enter the value of n:")
// var i = 1;
// var sum = 0
// while(i<n)
// {
//     sum = sum + i ;
//     i = i + 1; 
// }
// document.write("The sum all natural numbes from 1 to "+n+" is "+sum)

// 44- Write a js program to find sum of all even numbers between 1 to n.
// var n = prompt("Please Enter the value of n:")
// var i = 1;
// var sum = 0 ;
// while(i<n)
// {
//     if(i%2 == 0)
//     {
//         sum = sum + i;
//     }
//     i = i + 1 ;
// }
// document.write("The sum of all even numbers between 1 to "+n+" is "+sum)

// 45- Write a js program to find sum of all odd numbers between 1 to n.
// var n = prompt("Please Enter the value of n:")
// var i = 3;
// var sum = 0 ;
// while(i<n)
// {
//     if(i%2 != 0)
//     {
//         sum = sum + i;
//     }
//     i = i + 1 ;   
// }
// document.write("The sum of all odd numbers between 1 to "+n+" is "+sum)

// 46- Write a js program to print multiplication table of any number.
// var n = prompt("Please Enter the number you want to print the table of:")
// n = parseInt(n)
// var i = 1
// while(i<=10)
// {
//     document.write(n+" * "+i+" = "+ n*i)
//     document.write("<br>")
//     i = i+1
// }
// 47- Write a js program to count number of digits in a number.
// var number = prompt("Please enter the number you want to count the digits of:")
// var counter = 0 ;
// for(var  i = 0; i<number.length; i++)
// {
//     counter = counter + 1;
// }
// document.write("There are "+counter+" digits in a number.")

// 48- Write a js program to find first and last digit of a number.











































