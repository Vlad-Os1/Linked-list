class Node {
  constructor(data = null, nextNode = null) {
    this.data = data;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.listSize = 0;
  }

  // Adds Node in the Beginning
  prepend(value) {
    this.head = new Node(value, this.head); //  new head node points to the old head
    this.listSize++;
  }

  // Adds Node in the End
  append(value) {
    let node = new Node(value);
    let currentNode;

    if (!this.head) {
      this.head = node;
    } else {
      currentNode = this.head;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = node;
    }
    this.listSize++;
  }

  pop() {
    if (!this.head) return;

    let currentNode = this.head;
    let previousNode;

    if (this.listSize === 1) {
      this.head = null;
    } else {
      while (currentNode.nextNode) {
        previousNode = currentNode;
        currentNode = currentNode.nextNode;
      }
      previousNode.nextNode = null;
    }
    this.listSize--;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    let index = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === value) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index++;
    }
    return null;
  }

  //  returns the total number of nodes in the list
  printSize() {
    console.log(this.listSize);
  }

  // returns the first node in the list
  printHead() {
    console.log(this.head);
  }

  // returns the last node in the list
  printTail() {
    let currentNode = this.head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    console.log(currentNode);
  }

  // return the Node at specific index like in array
  printAt(index) {
    let currentNode = this.head;
    if (index < 0 || index > this.listSize) return;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    console.log(currentNode);
  }

  // Print our list
  toString() {
    let currentNode = this.head;
    let logData = '';
    while (currentNode) {
      logData += ` (${currentNode.data}) ->`;
      currentNode = currentNode.nextNode;
    }
    console.log(`${logData} null`);
  }
}

const ll = new LinkedList();
ll.prepend(10);
ll.append(20);
ll.append(30);
// ll.printSize();
// ll.printHead();
// ll.printTail();
// ll.printAt(2); // returns node with value 30
// ll.pop();
// ll.pop();
// ll.pop();
ll.toString();
ll.contains(20);
console.log(ll.find(30));
