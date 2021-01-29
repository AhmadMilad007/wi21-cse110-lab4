

![Screenshot](https://github.com/AhmadMilad007/wi21-cse110-lab4/blob/main/part3/image1.PNG "screenshot")
![Screenshot](https://github.com/AhmadMilad007/wi21-cse110-lab4/blob/main/part3/image2.PNG "screenshot")
![Screenshot](https://github.com/AhmadMilad007/wi21-cse110-lab4/blob/main/part3/image3.PNG "screenshot")
![Screenshot](https://github.com/AhmadMilad007/wi21-cse110-lab4/blob/main/part3/bugfix.PNG "screenshot")




## Question 1:
	- The bug is that in line number 9 of the calculateSum, num1 and num2 are treated as strings, so when we use +  sign to add the two variables they are simply concatenated to each other instead of calculating their sum. 
## Question 2: 
	- To fix this bug, we can change line 9 from: let result = num1 + num2  to: let result = (+num1) + (+num2). This way, we make sure that the num1 and num2 strings are treaded as numbers. 

## DevTools- NetworkTab

### 1:
	-name of the new json file is: citylots
### 2:
	-Download intiator: part2.js
### 3: 
	-File size is: 11.7 MB
### 4: 
	-68 ms
### 5: 
	-User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36
### 6:
	-Type of server: Apache 
### 7:
	-Last-Modified: Tue, 26 Jan 2021 22:14:13 GMT
### 8:
	-Content-type: application/json
### 9:
	-  <button onClick={fetchData()}>Fetch Data</button> , or the FetchData method. 
