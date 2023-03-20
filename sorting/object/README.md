# Sorting Objects

Sorting objects typically comes down to sorting based on properties in the object. This is similar to filtering, which often checks one property’s value. When this is necessary, your callback function will take an a and a b object, apply some logic to choose which properties, and compare them using either the number or string comparisons above. In some applications, this may need to be repeated. For instance, if you are sorting alphabetically for the phone book, you would sort first by last name, and if last names are equal, then by first name. If there are multiple people with the same first and last name, you may decide to then sort by phone number!

## Assignment

In the first half of this code challenge, you will write functions which sort domain objects. Your functions will receive an array of Movie objects. Each Movie object has a title (string), a year (number), and a list of genres (array of strings). One function will sort the movies by most recent year first. One function will sort the movies, alphabetical by title, but will ignore any leading “A”s, “An”s, or “The”s. Test outputs for these functions, and an array of sample data, have been provided in test and movies.

In the second half of the code challenge, you will write tests for your comparator functions. This may necessitate refactoring the code you wrote in part one. Your tests will need to call the comparator functions directly, and make assertions about the response values given test inputs.

## Implementation

[Code](./index.js)
[Tests](./__tests__/object-sorting.test.js)
