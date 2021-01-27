#Part One Answers 

##Question1:
	-	Line 11 is supposed to print the value of i in the terminal, but since we don't pass anything to the function, nothing will be printed in the terminal. Most importantly runnig the program will not cause an error because i is decleared as a var so it can be seen outside of the for loop.
##Question2: 
	- 	Line 12 is supposed to print the value of discountedPrice in the terminal, but since we don't pass anything to the funciton yet (function is not called yet), and most importantly runnig the program will not cause an error because discountedPrice is decleared as a var so it can be seen outside of the for loop.

##Question3: 
	-	Same as above, line 13 is supposed to print the value of finalPrice to the terminal, but since this value is in the scope of the discountPrices function and function is not called yet, running the code will not print anything in the terminal. 
##Question4:
	- 	DiscountPrices([100,200,300],.5) will return the following values: 3, 150, 150, here 3 is from line 11 which outputs the value of i (i many times the for loop run), the first 150 is the ouput of line 11 which is value of discountedPrice, and the second 150 is the output of line 13 which is the value of finalPrice. 
##Question5:
	-	If the discountPrice function is called, line 11 will cause an error becuase i is decleared via 'let' and it exists in the scope of the for loop which means it's not visibal outside of {....} block of code for the for loop. 
##Question6: 
	-	Same as above, since in line 12 discountedPrice is delceared via 'let', it's only visibal inside the code block {...} of the for loop, so calling discountedPrices function will cause an erro. 
##Question7:
	-	If we call the discountPrices function, line 13 will return a value becuase finalPrice variable is decleared via 'let' and it is is located within the scope of the calling function. 																								
##Question8:
-	-	The function will return an error message, i is not defined, it is becuase i is decleared via 'let' and it only exists in the scope of the for loop, so calling it outside of the for loop is causing this erro, since error is located in line 11 the compiler doesn't jump to the next instructions. Thus, the ony output is the error message. 
##Question9:
	- 	If the discountPrice function is called, line 11 will cause an error becuase i is decleared via 'let' and it exists in the scope of the for loop which means it's not visibal outside of {....} block of code for the for loop. 
##Question10: 
	-	Since in line 12 discountedPrice is delceared via 'let', it's only visibal inside the code block {...} of the for loop, so calling discountedPrices function will cause an erro at line 12. 
##Questopm11:
	-	In line 13 we are trying to print the finalPrice to the console, and the variable is in the scope, but since the program is trying to change the value of a constant inside the for loop, this line will not be executed. 
##Question12: 	
	-	running the function for discoutPrices([100,200,300],.5) will cause an error because we assign finalPrice to be a constant value, but inside the for loop in line 7 we are trying to assign finalPrice a new value which is not allowed because it's a const. Thus, running the function on this input will cause an error. 
##Question13: 
	-		
