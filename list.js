'use strict';

class Node {
  constructor (data) {
    this.payload = data;
    this.next = null;
  }
}

class List {
  constructor () {
    this.head = null
  }

  add (node) {
    if (this.head) {

    } else {
    node.next = this.head
    this.head = node
    }
  }
}

const list = new List;
console.log(list);

list.add(new Node('A'))
console.log(list);

list.add(new Node('B'))
console.log(list);

list.add(new Node('C'))
console.log(list);
