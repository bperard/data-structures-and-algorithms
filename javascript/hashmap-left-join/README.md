# Hashmap Left Join

Write a function that LEFT JOINs two hashmaps into a single data structure.

- Write a function called left join
- Arguments: two hash maps
- The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
- The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
- Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic

## Whiteboard Process

![Hashmap Left Join Whiteboard](../assets/433HashmapLeftJoin.png)

## Approach & Efficiency

Space O(n)
We add another data structure of size n for our return.

Time O(n)
We traverse through the first hashmap and then use direct lookup to find the value in second hash, and then added the value or null if the key is not present.

## Solution

[Code](../hashtable/index.js)
[Tests](../hashtable/__tests__/hashtable.test.js)
