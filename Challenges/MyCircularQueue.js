/*
Problem Prompt: Implement a Circular Queue
Design your implementation of the circular queue. A circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle, and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

To implement a circular queue, you should support the following operations:

MyCircularQueue(k): Constructor, set the size of the queue to be k.
Front(): Get the front item from the queue. If the queue is empty, return -1.
Rear(): Get the last item from the queue. If the queue is empty, return -1.
enQueue(value): Insert an element into the circular queue. Return true if the operation is successful.
deQueue(): Delete an element from the circular queue. Return true if the operation is successful.
isEmpty(): Checks whether the circular queue is empty or not.
isFull(): Checks whether the circular queue is full or not.

*/

class MyCircularQueue {
    constructor(k) {
        this.queue = new Array(k);
        this.head = -1;
        this.tail = -1;
        this.maxSize = k;
    }

    front() {
        if (this.isEmpty()) {
            return -1;
        }

        return this.queue[this.head];
    }

    rear() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.queue[this.tail];
    }

    enqueue(value) {
        if (this.isFull()) {
            return false;
        }
        if (this.isEmpty()) {
            this.head = 0;
        }
        this.tail = (this.tail + 1) % this.maxSize;
        this.queue[this.tail] = value;
        return true;
    }

    dequeue() {
        if (this.isEmpty()) {
            return false;
        }

        if (this.head === this.tail) {
            this.head = -1;
            this.tail = -1;
        } else {
            this.head = (this.head + 1) % this.maxSize;
        }

        return true;
    }

    isEmpty() {
        return this.head === -1;
    }

    isFull() {
        return ((this.tail + 1) % this.maxSize === this.head)
    }
}