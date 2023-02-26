# Stacks and Queues

Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue

## Challenge

Create a **Stack** class that has a top property. It creates an empty Stack when instantiated.

The class should contain the following methods:

- push
- pop
- peek
- isEmpty

Create a **Queue** class that has a front property. It creates an empty Queue when instantiated.

The class should contain the following methods:

- enqueue
- dequeue
- peek
- isEmpty

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## API

### Stack

**push**
Arguments: value
adds a new node with that value to the top of the stack with an O(1) Time performance.

**pop**
Arguments: none
Returns: the value from node from the top of the stack
Removes the node from the top of the stack
Should raise exception when called on empty stack

**peek**
Arguments: none
Returns: Value of the node located at the top of the stack
Should raise exception when called on empty stack

**isEmpty**
Arguments: none
Returns: Boolean indicating whether or not the stack is empty.

### Queue

**enqueue**
Arguments: value
adds a new node with that value to the back of the queue with an O(1) Time performance.

**dequeue**
Arguments: none
Returns: the value from node from the front of the queue
Removes the node from the front of the queue
Should raise exception when called on empty queue

**peek**
Arguments: none
Returns: Value of the node located at the front of the queue
Should raise exception when called on empty stack

**isEmpty**
Arguments: none
Returns: Boolean indicating whether or not the queue is empty
