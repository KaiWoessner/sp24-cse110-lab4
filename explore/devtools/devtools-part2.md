## Part 2
### Devtools - Debugging
1. The bug was that since the inputted `num1` and `num2` were both strings, the `+` operator was used as a concatenator instead of an addition operator
2. To fix this, I would convert `num1` and `num2` to numbers before they are inserted into `result` calculation line. I would use the `Number()` function.
