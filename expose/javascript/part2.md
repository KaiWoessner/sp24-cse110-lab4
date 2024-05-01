## Part 2
### Variables and Scoping continued
1. Since `i` is declared with `var`, it still exists outside of the `for` loop scope and therefore line 12 will print: 3
2. Since `discountedPrice` is declared with `var`, it still exists outside of the `for` loop scope (updating `discountedPrice` each iteration) and therefore line 13 will print: 150
3. Since `finalPrice` is declared with `var`, it exists outside and inside of the `for` loop scope and is updated each iteration. Therefore line 14 will print: 150
4. Since `discounted` is a list that is appended to for each price (due to the `for` loop and `push`), the function will return the list: [50, 100, 150]. Since `discounted` and `finalPrice` are declared with `var`, they exist everywhere in the function.

5. Since `i` is declared with `let`, it does not exist outside of the `for` loop scope and therefore line 12 is referencing a variable that doesn't exist and will return an error.
6. Since `discountedPrice` is declared with `let`, it does not exist outside of the `for` loop scope and therefore line 13 is referencing a variable that doesn't exist and will return an error.
7. Since `finalPrice` is declared with `let` and is declared in the main code block, it also exists in the `for` loop scope and is updated each iteration. Therefore line 14 will print: 150
8. Since `discounted` is a list that is appended to for each price (due to the `for` loop and `push`), the function will return the list: [50, 100, 150]. Since `discounted` and `finalPrice` are declared with `let` in the main code block, they exist everywhere in the function.
   
9. Since `i` is declared with `let`, it does not exist outside of the `for` loop scope and therefore line 11 is referencing a variable that doesn't exist and will return an error.
10. Since there are 3 variables in `prices`, `length` is never reassigned, and `length` is declared in the main block, line 12 will print: 3
11. Since `discounted` is a list that is appended to for each price (due to the `for` loop and `push`) and none of the `const` variables 'discounted','length', and 'discountedPrice' are updated, the function will return the list: [50, 100, 150].
### Data Types
12A. student.name  
12B. student["Grad Year"]  
12C. student.greeting()  
12D. student["Favorite Teacher"].name  
12E. student.courseLoad[0]  

### Basic Operators and Type Conversion
**Arithmetic**  
13A. '32'. This is because the `+` acts as a string concatenation, converts the `2` to a string, and concatenates the two strings.  
13B. 1. This is because the `-` is used arithmetically as a subtraction sign and converts the string `'3'` to an integer and performs the operation `3-2=1`  
13C. 3. The `+` acts as an addition operator and `null` is assigned the value of 0. So `3+0=3`  
13D. '3null'. The `+` acts as a string concatenation and converts `null` to the string `'null'`.  
13E. 4. The `+` acts as an addition operator and `true` is converted to its equivalent numeric value of 1. So `1+3=4`.  
13F. 0. The `+` acts as an addition operator so `false` is converted to its equivalent numeric value of 0 and `null` is converted to 0. So `0+0=0`.  
13G. '3undefined'. The `+` acts as a string concatenation, converts `undefined` to the string `'undefined'` and concatenates the two strings.  
13H. NaN. The `-` acts as a subtraction operator so `undefined` is converted to `NaN` (not a number) because it does not have an equivalent integer value. This leads to `3-NaN=NaN`.  
  
**Comparison**  
14A. true. The string `'2'` is converted to the integer 2 (because the other operand is a number) and since `2>1` it is true.  
14B. false. Since `'2'` and `'12'` are strings, the strings are compared lexographically. Because `1` is less than `2`, `'12'` is less than `'2'` and the comparison evaluates to false.  
14C. true. The `==` operator converts the string `'2'` to the number 2 (because the other operand is a number) and compares `2==2` which is true.  
14D. false. The `===` operator performs the comparison without converting types. Therefore `'2'===2` is false.  
14E. false. The `==` operator first converts `true` to its numeric equivalent of 1 (becuase the other operand is a number). Therefore `1==2` is false.  
14F. true. The Boolean function `Boolean(2)` is equivalent to true, therefore the `===` operator compares if 'true===true' which is true.
  
15. The difference between `==` and `===` is that the `==` operator first tries to convert the types of each operand to be the same before comparison the values while the `===` operator compares each operand as-is without converting the types. This means that `2=='2'` is true while `2==='2'` is false.
  
**Functions**  
17. The function will return: `[2,4,6]`. This is because the initial `modifyArray` takes in the value `[1,2,3]` (array) and the function `doSomething` (callback). Each iteration of the for loop pushes a new value to `newArr`. The new value is obtained by running the individual elements in the array into the callback function `doSomething`. Since `doSomething`, doubles the element, the returned `newArr` is `[2,4,6]`.

**setInterval(), setTimeout(), clearTimeout()**  
19. The code prints each number on a different line in the order: 1->4->3->2. This is because of the delay applied to `2` and `3` using the `setTimeout` function.  

