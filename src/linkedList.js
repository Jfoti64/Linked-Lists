import Node from './node';

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  getListHead() {
    return this.head;
  }

  setListHead(newHead) {
    this.head = newHead;
  }

  getLastListItem() {
    const listHead = this.getListHead();
    if (listHead == null) {
      return listHead;
    }
    let currentItem = listHead;
    while (currentItem.next != null) {
      currentItem = currentItem.next;
    }
    return currentItem;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      // If the list is empty, set the new node as the head of the list
      this.head = newNode;
    } else {
      // If the list is not empty, find the last item and append the new node
      const lastItem = this.getLastListItem();
      lastItem.setNext(newNode);
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      // If the list is empty, set the new node as the head of the list
      this.head = newNode;
    } else {
      // If the list is not empty, find the first item and prepend the new node
      const firstItem = this.head;
      newNode.next = firstItem;
      this.head = newNode;
    }
  }

  size() {
    let size = 0;
    let currentNode = this.head;
    while (currentNode != null) {
      size += 1;
      currentNode = currentNode.next;
    }
    return size;
  }

  atIndex(index) {
    if (index < 0 || this.head === null || index === null) {
      throw new Error('Invalid index');
    }

    let currentNode = this.head;

    for (let i = 0; i < index; i += 1) {
      currentNode = currentNode.next;
      if (currentNode === null) {
        throw new Error('Invalid index');
      }
    }
    return currentNode;
  }

  pop() {
    const listLength = this.size();
    if (listLength === 0) {
      // Handle case when the list is already empty
      return;
    }
    if (listLength === 1) {
      // Handle case when the list has only one element
      this.head = null;
    } else {
      // General case for more than one element
      const secondLastNode = this.atIndex(listLength - 2);
      secondLastNode.next = null;
    }
  }

  contains(value) {
    let currentItem = this.head;
    while (currentItem != null) {
      if (currentItem.value === value) {
        return true;
      }
      currentItem = currentItem.next;
    }
    return false;
  }

  find(value) {
    let currentItem = this.head;
    let index = 0;
    while (currentItem != null) {
      if (currentItem.value === value) {
        return index;
      }
      currentItem = currentItem.next;
      index += 1;
    }
    return null;
  }
}

export default LinkedList;
