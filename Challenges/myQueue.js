/*

Implement a Queue using Stacks
Implement a first-in-first-out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, pop, peek, and empty).

Implement the MyQueue class:
void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns whether the queue is empty.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue).

*/

class MyQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    push(x) {
        this.stack1.push(x);
    }

    // Return int
    pop() {
        if (this.stack2.length === 0) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }

    // Return int
    peek() {
        if (this.stack2.length === 0) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return (this.stack2[this.stack2.length - 1]);
    }

    // Return bool
    empty() {
        return (this.stack1.length === 0 && this.stack2.length === 0)
    }
}