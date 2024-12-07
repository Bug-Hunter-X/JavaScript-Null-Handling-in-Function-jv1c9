# JavaScript Null Handling

This repository demonstrates a common error in JavaScript: improper handling of null values.

The `bug.js` file contains a function that handles null values correctly. However, this implementation is not robust in that it doesn't take into account other falsy values like 0, "", false, and NaN, which could also lead to unexpected behavior.

The `bugSolution.js` file demonstrates a more robust approach to null value handling.