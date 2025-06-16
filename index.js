class Node {
  constructor(data = null, nextNode = null) {
    this.data = data;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Adds Node in the Beginning
  prepend(value) {
    this.head = new Node(value, this.head);
    this.size++;
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
    this.size++;
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
ll.toString();
