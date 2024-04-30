## Part 2
### Variables and Scope continued
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


13.
