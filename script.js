// 1- Write a js program to check whether a character is uppercase or lowercase alphabet.
// var char = prompt("Please enter a character to check:")
// if(char>="A" && char<="Z")
// {
//     alert("The character is in Upper case.")
// }
// else if (char>="a" && char<="z")
// {
//     alert("The character is in Lower case.") 
// }

// 2- Write a js program to input Week number and print week day.
// var days = ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"]
// var currentDate = new Date()
// var number = prompt("Please enter week number:")
// document.write(days[number])

// 3- Write a js program to input month number and print number of days in that month.
// var numberOfDays = [31,28,31,30,31,30,31,31,30,31,30,31]
// var months = ["January","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
// var number = prompt("Please enter month number:")
// document.write("There are "+numberOfDays[number]+" days in "+months[number]+".")

// 4- Write a js program to count total number of notes in given amount.
// var amount = prompt("Please enter the amount:")
// amount = parseInt(amount)
// if (amount >= 500) {
//     var note500 = amount / 500;
//     note500 = Math.floor(note500)
//     amount = amount % 500
// }
// else {
//     note500 = 0;
// }
// if (amount >= 100) {
//     var note100 = amount / 100;
//     note100 = Math.floor(note100)
//     amount = amount % 100
// }
// else {
//     note100 = 0;
// }
// if (amount >= 50) {
//     var note50 = amount / 50;
//     note50 = Math.floor(note50)
//     amount = amount % 50
// }
// else {
//     note50 = 0;
// }
// if (amount >= 20) {
//     var note20 = amount / 20;
//     note20 = Math.floor(note20)
//     amount = amount % 20
// }
// else {
//     note20 = 0;
// }
// if (amount >= 10) {
//     var note10 = amount / 10;
//     note10 = Math.floor(note10)
//     amount = amount % 10
// }
// else {
//     note10 = 0;
// }
// if (amount >= 5) {
//     var note5 = amount / 5;
//     note5 = Math.floor(note5)
//     amount = amount % 5
// }
// else {
//     note5 = 0;
// }
// if (amount >= 2) {
//     var note2 = amount / 2;
//     note2 = Math.floor(note2)
//     amount = amount % 2
// }
// else {
//     note2 = 0;
// }
// if (amount >= 1) {
//     var note1 = amount / 1;
//     note1 = Math.floor(note1)
//     amount = amount % 100
// }
// else {
//     note1 = 0;
// }
// document.write("500 : " + note500 + "<br>"+ "100 : " + note100 + "<br>"+ "50 : " + note50 + "<br>"+ "20 : " + note20 + "<br>"+ "10 : " + note10 + "<br>"+ "5 : " + note5 + "<br>"+ "2 : " + note2 + "<br>"+ "1 : " + note1)

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

// 9- Write a js program to calculate profit or loss.
// var originalPrice = prompt("Please enter original price of an object:")
// var soldPrice = prompt("Please enter sold price of an object:")
// var profit,loss ;
// if (soldPrice>originalPrice)
// {
//     profit = soldPrice - originalPrice ;
//     document.write("You earned "+profit+" Rs.")
// }
// if (soldPrice<originalPrice)
// {
//     loss = originalPrice - soldPrice ;
//     document.write("You loss "+loss+" Rs.")
// }

// 10- Write a js program to search all occurrences of a character in given string.
// var string = "Java Script is Scripting Language."
// var char = prompt("Please enter a character to search the occurances:")
// var counter = 0
// for(var i = 0; i<=string.length; i++)
// {
//     if(string.slice(i, i+1)==char)
//     {
//         counter = counter + 1;

//     }  
// }
// document.write("The character "+char+ " appears "+counter+" times in a string")

// 11- Write a js program to count occurrences of a character in given string.
// var str = "javassscript"
// var counter = 0 ;
// var char = prompt("Please enter the character:")
// for(i = 0 ; i<=str.length; i++)
// {
//     if(char==str.slice(i,i+1))
//     {
//         counter = counter+1
//     }
// }
// document.write("The character "+char+" appears "+counter+" times in string." )

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

// 14- Write a js program to count frequency of each character in a string.
// var str = "javajavascript"
// var element;
// var counter = 0;
// var ishara = 0
// var charArr = []
// var counterArr = []
// for(i=0; i<str.length; i++)
// {
//     element = str.slice(i,i+1)
//     for(j=0; j<str.length; j++)
//     {
//         if(element == str[j])
//         {
//             counter = counter + 1 ;
//         }
//     }
//     for(k=0; k<str.length; k++)
//     {
//         if(element == charArr[k])
//         {
//             ishara = ishara + 1;
//         }
//     }
//     if(ishara<1)
//     {
//         charArr.push(element)
//         counterArr.push(counter)
//     }
//     counter = 0 ;
//     ishara = 0 ;
// }
// for(i=0; i<charArr.length; i++)
// {
//     document.write(charArr[i]+" : "+counterArr[i]+"<br>")
// }

// 15- Write a js program to remove first occurrence of a character from string.
// var str ="javascript is a scripting language."
// var char = prompt("please enter character you want to remove first occurence:")
// var charToremove = str.indexOf(char)
// var firstStr = str.slice(0,charToremove)
// var secondStr = str.slice(charToremove+1, str.length)
// var fullStr = firstStr+secondStr
// document.write("Original string "+str+"<br>")
// document.write("The string after removing the first occurance of character "+ char+" is "+'"'+fullStr+'"')

// 16- Write a js program to remove last occurrence of a character from string.
// var str ="javascript"
// var char = prompt("please enter character you want to remove last occurence:")
// var charToremove = str.lastIndexOf(char)
// var firstStr = str.slice(0,charToremove)
// var secondStr = str.slice(charToremove+1, str.length)
// var fullStr = firstStr+secondStr
// document.write("Original string "+str+"<br>")
// document.write("The string after removing the last occurance of character "+ char+" is "+'"'+fullStr+'"')

// 17- Write a js program to remove all occurrences of a character from string.
// var str = "javajavajava"
// var char = prompt("Please enter the character to remove:")
// for (var i = 0; i<=str.length; i++)
// {
//     if(char == str.slice(i , i+1))
//     {
//         str = str.replace(char , "")
//     }
// }
// document.write(str)

// 18- Write a js program to remove all repeated characters from a given string.
// var str = "usamarazzaq"
// var newStr = [];
// var char;
// var count = 0
// for(var i = 0; i<=str.length; i++)
// {
//     char = str.slice(i , i+1)
//     for(var j = 0; j<=newStr.length; j++)
//     {
//         if(char == newStr[j])
//         {
//             count = count+1
//         }
//     }
//     if(count ==0)
//     {
//         newStr.push(char)
//     }
//     count = 0
// }
// var latestStr = ""
// for( var i = 0; i<newStr.length;i++)
// {
//     latestStr = latestStr+newStr[i]
// }
// document.write(latestStr)

// 19- Write a js program to replace first occurrence of a character with another in a string.
// var string = "javascript javascript"
// var charToreplace = prompt("Please enter character to remove:")
// var charToadd = prompt("Please enter character to replace with:")
// for(var  i=0; i<=string.length;i++)
// {
//     if(charToreplace == string.slice(i,i+1))
//     {
//         string = string.replace(charToreplace , charToadd)
//         break
//     }
// }
// document.write(string)

// 20- Write a js program to replace last occurrence of a character with another in a string.
// var string = "javascript javascript"
// var charToreplace = prompt("Please enter character to remove:")
// var charToadd = prompt("Please enter character to replace with:")
// var indexChar= string.lastIndexOf(charToreplace)
// var str1 = string.slice(0,indexChar)
// var str2 = string.slice(indexChar+1,string.length)
// string =str1+charToadd+str2
// document.write(string)

// 21- Write a js program to replace all occurrences of a character with another in a string.
// var string = "javascript javascript"
// var charToreplace = prompt("Please enter character to remove:")
// var charToadd = prompt("Please enter character to replace with:")
// for(var  i=0; i<=string.length;i++)
// {
//     if(charToreplace == string.slice(i,i+1))
//     {
//         string = string.replace(charToreplace , charToadd)
//     }
// }
// document.write(string)

//22- Write a js program to find first occurrence of a word in a given string.
// var string = "javascript is a scripting language"
// var word;
// var arr =[]
// for(var i=0; i<=string.length; i++)
// {
//     word = string.slice(i,i+1)
//     if(word != " ")
//     {
//         arr.push(word)
//     }
//     else
//     {
//         break
//     }
// }
// var oneChar = arr.slice(0,1)
// for(var i = 1; i<=arr.length; i++)
// {
//     oneChar = oneChar+arr.slice(i,i+1)
// }
// document.write(oneChar)

// 23- Write a js program to find last occurrence of a word in a given string.
// var string = "javascript is a scripting language"
// var word ;
// var arr =[]
// for(var i = string.length; i>=0; i--)
// {
//     word = string.slice(i-1,i)
//     if(word != " ")
//     {
//         arr.unshift(word)
//     }
//     if(word == " ")
//     {
//         break
//     }
// }
// word = arr.slice(0,1)
// for(var  i = 1; i<=arr.length; i++)
// {
//     word = word+arr.slice(i,i+1)
// }
// document.write(word)

// 24- Write a js program to search all occurrences of a word in given string.
// var str = "javascript is scripting language."
// var word = prompt("Please enter word to search:")
// var  counter = 0 ;
// for(i = 0; i<=str.length; i++)
// {
//     if(word == str.slice(i,i+word.length))
//     {
//         counter = 1;
//         break
//     }
// }
// if(counter == 1)
// {
//     document.write("Word "+word+" is found at location "+i)
// }
// else
// {
//     document.write("Word is not found")
// }

// 25- Write a js program to count occurrences of a word in a given string.
// var str = "javascript is scripting language. javascript is browser based language."
// var word = prompt("Please enter word to find:")
// var count = 0;
// for (var i =0; i<=str.length; i++)
// {
//     if(word == str.slice(i,i+word.length))
//     {
//         count = count + 1
//     }
// }
// document.write(word+" word appears "+count+" times.")

// 26- Write a js program to remove first occurrence of a word from string.
// var str = "javascript is scripting language. javascript is a browser based language."
// var word = prompt("Please enter word to remove first occurance:")
// var wordToremove = str.indexOf(word)
// var firstStr = str.slice(0,wordToremove)
// var secondStr = str.slice(wordToremove+word.length , str.length)
// var fullStr = firstStr+secondStr
// document.write("Original string "+str+"<br>")
// document.write(fullStr)

// 27- Write a js program to remove last occurrence of a word in given string.
// var str = "javascript is scripting language. javascript is a browser based language."
// var word = prompt("please enter word to remove last occurence:")
// var wordToremove = str.lastIndexOf(word)
// var firstStr = str.slice(0,wordToremove)
// var secondStr = str.slice(wordToremove+word.length, str.length)
// var fullStr = firstStr+secondStr
// document.write("Original string:"+str+"<br>")
// document.write(fullStr)

// 28- Write a js program to remove all occurrence of a word in given string.
// var str = "javascript is scripting language. javascript is a browser based language."
// var word = prompt("Please enter word to remove:")
// for (var i = 0; i<=str.length; i++)
// {
//     if(word == str.slice(i , i+word.length))
//     {
//         str = str.replace(word , "")
//     }
// }
// document.write(str)

// 29- Write a js program to trim leading white space characters from given string.
// var str = "     This is whitespace string for testing purpose     ";
// var word ;
// for (var i = 0; i<=str.length; i++)
// {
//     word = str.slice(i,i+2)
//     if(word == "  " )
//     {
//         str = str.replace(word , "")
//     }
// }
// var firstChar = str.slice(0,1)
// if(firstChar == " ")
// {
//     str = str.replace(firstChar , "")
// }
// alert(str)

// 30- Write a js program to trim trailing white space characters from given string.
// var str = "This is   ";
// var word ;
// for (var i = str.length; i>=0; i--)
// {
//     word = str.slice(str.length-2,str.length)
//     if(word == "  " )
//     {
//         str = str.replace(word , "")
//     }
// }
// var lastChar = str.slice(str.length)
// if(lastChar == " ")
// {
//     str = str.replace(lastChar , "")
// }
// alert(str+"usama")

// 31- Write a js program to trim both leading and trailing white space characters from given string.
// var str = "     This is whitespace string for testing purpose     ";
// var word ;
// for (var i = 0; i<=str.length; i++)
// {
//     word = str.slice(i,i+2)
//     if(word == "  " )
//     {
//         str = str.replace(word , "")
//     }
// }
// var firstChar = str.slice(0,1)
// if(firstChar == " ")
// {
//     str = str.replace(firstChar , "")
// }
// for (var i = str.length; i>=0; i--)
// {
//     word = str.slice(str.length-2,str.length)
//     if(word == "  " )
//     {
//         str = str.replace(word , "")
//     }
// }
// var lastChar = str.slice(str.length)
// if(lastChar == " ")
// {
//     str = str.replace(lastChar , "")
// }
// document.write("before"+str+"after")

// 33- Write a js program to count frequency of each element in an array
// var str = [1,3,4,2,3,6,4,7,6]
// var element;
// var counter = 0;
// var ishara = 0
// var charArr = []
// var counterArr = []
// for(i=0; i<str.length; i++)
// {
//     element = str[i]
//     for(j=0; j<str.length; j++)
//     {
//         if(element == str[j])
//         {
//             counter = counter + 1 ;
//         }
//     }
//     for(k=0; k<str.length; k++)
//     {
//         if(element == charArr[k])
//         {
//             ishara = ishara + 1;
//         }
//     }
//     if(ishara<1)
//     {
//         charArr.push(element)
//         counterArr.push(counter)
//     }
//     counter = 0 ;
//     ishara = 0 ;
// }
// for(i=0; i<charArr.length; i++)
// {
//     document.write(charArr[i]+" : "+counterArr[i]+"<br>")
// }

// 34- Write a js program to print all unique elements in the array.
// var arr = [1,2,2,3,2,4,5,4,6,8,6,7,7,9,9]
// var counter  = 0 ;
// var element;
// var uniqueArr = []
// for (var  i = 0; i<=arr.length; i++)
// {
//     element = arr[i]
//     for(var  j = 0 ; j<=arr.length;j++)
//     {
//         if(element == arr[j])
//         {
//             counter = counter + 1; 
//         }
//     }
//     if(counter<=1)
//     {
//         uniqueArr.push(element)
//     }
//     counter = 0 ;
// }
// var uniqueElements ;
// document.write("The unique elements in the array are: <br>")
// for (var i = 0; i<=uniqueArr.length ; i++)
// {
//     uniqueElements = uniqueArr.slice(i,i+1)
//     document.write(uniqueElements+" ")
// }

// 35- Write a js program to count total number of duplicate elements in an array.
// var arr = [1,2,1,2,3,5,4,6,8,4,6,7,9,7]
// var counter  = 0 ;
// var element;
// var uniqueArr = []
// for (var  i = 0; i<=arr.length; i++)
// {
//     element = arr[i]
//     for(var  j = 0 ; j<=arr.length;j++)
//     {
//         if(element == arr[j])
//         {
//             counter = counter + 1; 
//         }
//     }
//     if(counter>1)
//     {
//         uniqueArr.push(element)
//     }
//     counter = 0 ;
// }
// document.write("There are "+uniqueArr.length+" duplicate elements in array.")

// 36- Write a js program to delete all duplicate elements from an array.
// var arr = [1,2,1,2,3,5,4,6,8,4,6,7,9,7]
// var counter  = 0 ;
// var element;
// var uniqueArr = []
// for (var  i = 0; i<=arr.length; i++)
// {
//     element = arr[i]
//     for(var  j = 0 ; j<=arr.length;j++)
//     {
//         if(element == arr[j])
//         {
//             counter = counter + 1; 
//         }
//     }
//     if(counter<=1)
//     {
//         uniqueArr.push(element)
//     }
//     counter = 0 ;
// }
// var uniqueElements ;
// document.write("The array after deleting duplicates elements from array are: <br>")
// for (var i = 0; i<=uniqueArr.length ; i++)
// {
//     uniqueElements = uniqueArr.slice(i,i+1)
//     document.write(uniqueElements+" ")
// }

// 37- Write a js program to merge two array to third array.
// var arr1 = [1,2,3,4,5]
// var arr2 = [6,7,8,9,10]
// var poping ;
// for(var i = 0; i<arr2.length; i++)
// {
//     poping = arr2.slice(i,i+1)
//     arr1.push(poping)
// }
// document.write("The merged array is : <br>")
// document.write(arr1)

// 38- Write a js program to find reverse of an array.
// var arr = [1,2,3,4,5]
// var element ;
// var reverseArr = []  
// for(i=0; i<arr.length; i++)
// {
//     reverseArr.unshift(arr[i])
// }
// document.write("The reverse of array is: <br>")
// document.write(reverseArr)

// 39- Write a js program to put even and odd elements of array in two separate array.
// var arr = [0,1,2,3,7,4,6,5]
// var oddArr = []
// var evenArr = []
// var element ;
// for(i = 0; i<arr.length; i++)
// {
//     element = arr.slice(i,i+1)
//     if(element%2 == 0)
//     {
//         evenArr.push(element)
//     }
//     else
//     {
//         oddArr.push(element)
//     }
// }
// document.write("Even array: <br>"+evenArr+"<br>")
// document.write("Odd array: <br>"+oddArr)

// 40- Write a js program to search an element in an array.
// var arr = [0,1,2,3,7,4,6,5]
// var element = prompt("Please enter the number you want to search:")
// var elementLocation = 0  ;
// for( i = 0; i<=arr.length; i++)
// {
//     if(element == arr.slice(i,i+1))
//     {
//         elementLocation = i+1 ;
//     }  
// }
// if(elementLocation!=0)
// {
//     document.write("Element "+element+" is found at location "+elementLocation)
// }
// else
// {
//     document.write(" Element not Found")
// }

// 42- Write a js program to sort even and odd elements of array separately.
// var arr = [1,3,2,5,4,6,7]
// var sortedArr = []
// var evenArr = []
// var oddArr = []
// var element ;
// for(i = 0; i<arr.length; i++)
// {
//     element=arr.slice(i,i+1)
//     if(element%2 == 0)
//     {
//         evenArr.push(element)
//     }
//     else
//     {
//         oddArr.push(element)
//     }
// }
// for (i = 0 ; i<oddArr.length; i++)
// {
//     sortedArr.push(oddArr[i])
// }
// for (i = 0 ; i<evenArr.length; i++)
// {
//     sortedArr.push(evenArr[i])
// }
// document.write(sortedArr)

// 43- Write a js program to left rotate an array.
// var arr = [1,2,3,4,5,6,7]
// var number = prompt("How many times you want to rotate left array:")
// var element;
// for (i=0; i<number; i++)
// {
//     element=arr.shift()
//     arr.push(element)
// }
// document.write("The array after rotating left "+number+" times "+"<br>"+arr)

// 44- Write a js program to right rotate an array.
// var arr = [1,2,3,4,5]
// var number = prompt("How many times you want to rotate right array:")
// var element;
// for (i=0; i<number; i++)
// {
//     element=arr.pop()
//     arr.unshift(element)
// }
// document.write("The array after rotating right "+number+" times "+"<br>"+arr)

// 


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
// var number = prompt("Please enter the number:")
// var firstdigit = number.slice(0,1)
// var lastdigit = number.slice(number.length-1)
// document.write("The first digit of number is"+firstdigit+" and last digit is "+lastdigit)

// 49- Write a js program to find sum of first and last digit of a number.
// var number = prompt("Please enter the number:")
// var firstdigit = number.slice(0,1)
// var lastdigit = number.slice(number.length-1)
// firstdigit = parseInt(firstdigit)
// lastdigit = parseInt(lastdigit)
// var sum = firstdigit+lastdigit
// document.write("The sum of first digit and last digit is "+sum)

// 50. Write a js program to swap first and last digits of a number.
// var number = prompt("Please enter the number:")
// var firstdigit = number.slice(0,1)
// var lastdigit = number.slice(number.length-1)
// var middleChars = number.slice(1,number.length -1)
// var numberSwap = lastdigit+middleChars+firstdigit
// document.write("The original number is "+number+" and the number after swapping is "+numberSwap)

// 51. Write a js program to calculate sum of digits of a number.
// var number = prompt("Please enter the number:")
// var numbersArr = []
// var sum = 0;
// var digit ;
// var num ;
// for(var  i = 0; i<number.length;i++)
// {
//     digit = number.slice(i,i+1)
//     numbersArr.unshift(digit)
// }
// for(var j = 0; j < numbersArr.length+1; j++)
// {
//     digit = numbersArr.shift()
//     digit = parseInt(digit)
//     sum = sum+digit
// }
// var lastDigit = numbersArr[0]
// lastDigit = parseInt(lastDigit)
// document.write("The sum of digits of a number is " +(sum+lastDigit))

// 52. Write a js program to calculate product of digits of a number.
// var number = prompt("Please enter the number:")
// var numbersArr = []
// var prod = 1;
// var digit ;
// var num ;
// for(var  i = 0; i<number.length;i++)
// {
//     digit = number.slice(i,i+1)
//     numbersArr.unshift(digit)
// }
// for(var j = 0; j < numbersArr.length+1; j++)
// {
//     digit = numbersArr.shift()
//     digit = parseInt(digit)
//     prod = prod*digit
// }
// var lastDigit = numbersArr[0]
// lastDigit = parseInt(lastDigit)
// document.write("The product of digits of a number is " +(prod*lastDigit))





