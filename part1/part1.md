#Part One Answers 

##Question1:
	-Line 11 is supposed to print the value of i in the terminal, but since we don't pass anything to the function, nothing will be printed in the terminal. Most importantly runnig the program will not cause an error because i is decleared as a var so it can be seen outside of the for loop.
##Question2: 
	-Line 12 is supposed to print the value of discountedPrice in the terminal, but since we don't pass anything to the funciton yet (function is not called yet), and most importantly runnig the program will not cause an error because discountedPrice is decleared as a var so it can be seen outside of the for loop.

##Question3: 
	-Same as above, line 13 is supposed to print the value of finalPrice to the terminal, but since this value is in the scope of the discountPrices function and function is not called yet, running the code will not print anything in the terminal. 
##Question4:
	-DiscountPrices([100,200,300],.5) will return the following values: 3, 150, 150, here 3 is from line 11 which outputs the value of i (i many times the for loop run), the first 150 is the ouput of line 11 which is value of discountedPrice, and the second 150 is the output of line 13 which is the value of finalPrice. 
##Question5:
	-If the discountPrice function is called, line 11 will cause an error becuase i is decleared via 'let' and it exists in the scope of the for loop which means it's not visibal outside of {....} block of code for the for loop. 
##Question6: 
	-Same as above, since in line 12 discountedPrice is delceared via 'let', it's only visibal inside the code block {...} of the for loop, so calling discountedPrices function will cause an erro. 
##Question7:
	-If we call the discountPrices function, line 13 will return a value becuase finalPrice variable is decleared via 'let' and it is is located within the scope of the calling function. 																								
##Question8:
	-The function will return an error message, i is not defined, it is becuase i is decleared via 'let' and it only exists in the scope of the for loop, so calling it outside of the for loop is causing this erro, since error is located in line 11 the compiler doesn't jump to the next instructions. Thus, the ony output is the error message. 
##Question9:
	-If the discountPrice function is called, line 11 will cause an error becuase i is decleared via 'let' and it exists in the scope of the for loop which means it's not visibal outside of {....} block of code for the for loop. 
##Question10: 
	-Since in line 12 discountedPrice is delceared via 'let', it's only visibal inside the code block {...} of the for loop, so calling discountedPrices function will cause an erro at line 12. 
##Questopm11:
	-In line 13 we are trying to print the finalPrice to the console, and the variable is in the scope, but since the program is trying to change the value of a constant inside the for loop, this line will not be executed. 
##Question12: 	
	-running the function for discoutPrices([100,200,300],.5) will cause an error because we assign finalPrice to be a constant value, but inside the for loop in line 7 we are trying to assign finalPrice a new value which is not allowed because it's a const. Thus, running the function on this input will cause an error. 
##Question13: 
	A)We can access value of the name in the student object by:  student.name
	B)we can access value of Grad Year in the student object by: student["Grade Year"] 
	C)we can access the function for the greeting in student by: student.greeting();
	D)we can access the name property of the object in Favorite Teacher in property in student by: student["Favorite Teacher"].name 
	E)we can access the first index in the array of the courseLoad property of the student by: student.courseLoad[0]
##Question14:
	A)the output is 32, it's because program is treating '3' as a character so it's concatenating it with 2 instead of adding the two numbers.
	B)the output is 1, since we are using - sign after '3' the program is treating '3' as an actual number. 
	C)the output is 3, it's becuase in javascript null is considered "no value" so adding 3 to null returns 3. 
	D)the output is 3null, as state in option A, because there is a + between '3' and null, javascript is concatenating them. 
	E)the output for true + 3 is 4, it's because java script is treating true as 1 and false as 0. 
	F)the output of false + null is 0, it's because in javascript false is treated as 0 and null represent a "no value".
	G)The output is NaN, this because undefined in javascript indicates that a var has not been assigned any value/not decleared at all, so integer + undefined returns NaN. 

	H) Same as above, the output is NaN. Explination stated in option G applies to this question as well. 
##Question15:
	A)The output is true for '2'>1, becuase '2' is used to define 2 as a templet literal,and before compraison it's transformed to it's actual value.
	B)The output is true, '12' is a templet literal so it's value is compared to 2, thus 2<12 so the output must be true. Same argument as above
	C)the output is true, '2' is a templet leteral so it's value comapred to 2, thus 2==2 must be true . Same argument as option A.
	D)the ouptut is false, becuase in javascript === strict equality, since '2' is not same type as 2, the program does not typecaset before comprasion.
	F)the output for true===Boolean(2) is a ReferenceError, it's because Boolean() function needs two inputs, but we are passing only one:2. 

##Question16:
	-The main difference between == and === is the way these two compare data types. When we compare two variables using ==, their data type is being ignored. However, if we compare two variables using ===, then their datatype is not ignored i.e === checks the datatype of the variables and then compares the values. 
